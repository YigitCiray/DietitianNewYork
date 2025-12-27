// Blog functionality - Fetches and displays markdown blog posts

// Configuration
const BLOG_FOLDER = 'blog/';
const GITHUB_REPO = 'YigitCiray/DietitianNewYork';
const GITHUB_BRANCH = 'main'; // or 'master'
const GITHUB_RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/public/${BLOG_FOLDER}`;
const GITHUB_API_BASE = `https://api.github.com/repos/${GITHUB_REPO}/contents/public/${BLOG_FOLDER}`;

// Parse frontmatter from markdown
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);
    
    if (!match) {
        return { frontmatter: {}, content: content };
    }
    
    const frontmatterText = match[1];
    const markdownContent = match[2];
    const frontmatter = {};
    
    frontmatterText.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const key = line.substring(0, colonIndex).trim();
            const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
            frontmatter[key] = value;
        }
    });
    
    return { frontmatter, content: markdownContent };
}

// Get filename without extension for URL
function getSlug(filename) {
    return filename.replace('.md', '');
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Fetch all blog posts
async function fetchBlogPosts() {
    try {
        // Fetch list of files from GitHub API
        const response = await fetch(GITHUB_API_BASE);
        if (!response.ok) {
            throw new Error('Failed to fetch blog posts');
        }
        
        const files = await response.json();
        
        // Filter only .md files (exclude README.md)
        const blogFiles = files
            .filter(file => file.name.endsWith('.md') && file.name !== 'README.md')
            .sort((a, b) => b.name.localeCompare(a.name)); // Sort by filename (newest first)
        
        // Fetch and parse each blog post
        const posts = await Promise.all(
            blogFiles.map(async (file) => {
                try {
                    const postResponse = await fetch(`${GITHUB_RAW_BASE}/${file.name}`);
                    if (!postResponse.ok) {
                        throw new Error(`Failed to fetch ${file.name}`);
                    }
                    const markdown = await postResponse.text();
                    const { frontmatter, content } = parseFrontmatter(markdown);
                    
                    // Debug: log frontmatter to see what's being parsed
                    console.log('Parsed frontmatter for', file.name, ':', frontmatter);
                    
                    return {
                        slug: getSlug(file.name),
                        filename: file.name,
                        title: frontmatter.title || 'Untitled',
                        date: frontmatter.date || '',
                        excerpt: frontmatter.excerpt || '',
                        category: frontmatter.category || 'Nutrition',
                        thumbnail: frontmatter.thumbnail || frontmatter.image || '',
                        content: content,
                        markdown: markdown
                    };
                } catch (error) {
                    console.error(`Error processing ${file.name}:`, error);
                    return null;
                }
            })
        );
        
        return posts.filter(post => post !== null);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Fallback: try to use local files if GitHub API fails
        return fetchLocalBlogPosts();
    }
}

// Fallback: Fetch from local files (for development or if GitHub API fails)
async function fetchLocalBlogPosts() {
    try {
        // Try to load manifest file first
        const manifestResponse = await fetch('blog/blog-manifest.json');
        if (!manifestResponse.ok) {
            throw new Error('Manifest not found');
        }
        
        const manifest = await manifestResponse.json();
        
        // Fetch and parse each blog post from local files
        const posts = await Promise.all(
            manifest.map(async (item) => {
                try {
                    const postResponse = await fetch(`blog/${item.filename}`);
                    if (!postResponse.ok) {
                        throw new Error(`Failed to fetch ${item.filename}`);
                    }
                    const markdown = await postResponse.text();
                    const { frontmatter, content } = parseFrontmatter(markdown);
                    
                    // Debug: log frontmatter to see what's being parsed
                    console.log('Parsed frontmatter for', item.filename, ':', frontmatter);
                    
                    return {
                        slug: item.slug,
                        filename: item.filename,
                        title: frontmatter.title || 'Untitled',
                        date: frontmatter.date || '',
                        excerpt: frontmatter.excerpt || '',
                        category: frontmatter.category || 'Nutrition',
                        thumbnail: frontmatter.thumbnail || frontmatter.image || '',
                        content: content,
                        markdown: markdown
                    };
                } catch (error) {
                    console.error(`Error processing ${item.filename}:`, error);
                    return null;
                }
            })
        );
        
        return posts.filter(post => post !== null);
    } catch (error) {
        console.error('Error fetching local blog posts:', error);
        console.warn('Make sure you are running a local server or the files are deployed to GitHub Pages');
        return [];
    }
}

// Convert markdown to HTML (simple parser - for production, use marked.js)
function markdownToHTML(markdown) {
    // Basic markdown parsing (enhanced version)
    let html = markdown;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    
    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^(\d+)\. (.*$)/gim, '<li>$2</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Paragraphs
    html = html.split('\n\n').map(para => {
        if (para.trim() && !para.match(/^<[h|u|o|l]/)) {
            return `<p>${para.trim()}</p>`;
        }
        return para;
    }).join('\n');
    
    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
    
    return html;
}

// Render blog listing
async function renderBlogListing() {
    const container = document.getElementById('blog-posts');
    if (!container) return;
    
    container.innerHTML = '<div class="loading">Loading blog posts...</div>';
    
    try {
        const posts = await fetchBlogPosts();
        
        if (posts.length === 0) {
            container.innerHTML = '<p class="no-posts">No blog posts found. Check back soon!</p>';
            return;
        }
        
        container.innerHTML = posts.map(post => {
            console.log('Rendering blog card for:', post.title, 'Thumbnail:', post.thumbnail);
            return `
            <article class="blog-card">
                ${post.thumbnail ? `
                    <div class="blog-card-image">
                        <a href="blog-post.html?slug=${post.slug}">
                            <img src="${post.thumbnail}" alt="${post.title}" loading="lazy" onerror="console.error('Failed to load image:', this.src)">
                        </a>
                    </div>
                ` : ''}
                <div class="blog-card-content">
                    <div class="blog-meta">
                        <span class="blog-date">${formatDate(post.date)}</span>
                        <span class="blog-category">${post.category}</span>
                    </div>
                    <h2 class="blog-title">
                        <a href="blog-post.html?slug=${post.slug}">${post.title}</a>
                    </h2>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <a href="blog-post.html?slug=${post.slug}" class="blog-read-more">Read More →</a>
                </div>
            </article>
        `;
        }).join('');
    } catch (error) {
        console.error('Error loading blog posts:', error);
        container.innerHTML = '<p class="no-posts">Unable to load blog posts at this time. Please try again later.</p>';
    }
}

// Render blog post detail
async function renderBlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    const container = document.getElementById('blog-post-content');
    if (!container) return;
    
    if (!slug) {
        container.innerHTML = '<p>Post not found.</p>';
        return;
    }
    
    try {
        const posts = await fetchBlogPosts();
        const post = posts.find(p => p.slug === slug);
        
        if (!post) {
            container.innerHTML = '<p>Post not found.</p>';
            return;
        }
        
        // Update page title
        document.title = `${post.title} | Dietitian New York`;
        
        // Render post
        console.log('Rendering blog post:', post.title, 'Thumbnail:', post.thumbnail);
        const htmlContent = markdownToHTML(post.content);
        
        container.innerHTML = `
            <article class="blog-post">
                ${post.thumbnail ? `
                    <div class="blog-post-image">
                        <img src="${post.thumbnail}" alt="${post.title}" loading="lazy" onerror="console.error('Failed to load image:', this.src)">
                    </div>
                ` : ''}
                <div class="blog-post-header">
                    <div class="blog-post-meta">
                        <span class="blog-date">${formatDate(post.date)}</span>
                        <span class="blog-category">${post.category}</span>
                    </div>
                    <h1 class="blog-post-title">${post.title}</h1>
                </div>
                <div class="blog-post-body">
                    ${htmlContent}
                </div>
                <div class="blog-post-footer">
                    <a href="blog.html" class="back-to-blog">← Back to All Posts</a>
                </div>
            </article>
        `;
    } catch (error) {
        console.error('Error loading blog post:', error);
        container.innerHTML = '<p>Unable to load blog post at this time. Please try again later.</p>';
    }
}

// Render blog preview on homepage
async function renderBlogPreview() {
    const container = document.getElementById('blog-preview');
    if (!container) return;
    
    try {
        const posts = await fetchBlogPosts();
        const recentPosts = posts.slice(0, 3); // Show 3 most recent
        
        if (recentPosts.length === 0) {
            // Hide the entire blog preview section if no posts
            const section = container.closest('.blog-preview-section');
            if (section) {
                section.style.display = 'none';
            }
            return;
        }
        
        container.innerHTML = `
            <div class="blog-preview-grid">
                ${recentPosts.map(post => {
                    console.log('Rendering blog preview for:', post.title, 'Thumbnail:', post.thumbnail);
                    return `
                    <div class="blog-preview-card">
                        ${post.thumbnail ? `
                            <div class="blog-preview-image">
                                <a href="blog-post.html?slug=${post.slug}">
                                    <img src="${post.thumbnail}" alt="${post.title}" loading="lazy" onerror="console.error('Failed to load image:', this.src)">
                                </a>
                            </div>
                        ` : ''}
                        <div class="blog-preview-content">
                            <div class="blog-preview-meta">
                                <span class="blog-date">${formatDate(post.date)}</span>
                                <span class="blog-category">${post.category}</span>
                            </div>
                            <h3 class="blog-preview-title">
                                <a href="blog-post.html?slug=${post.slug}">${post.title}</a>
                            </h3>
                            <p class="blog-preview-excerpt">${post.excerpt}</p>
                            <a href="blog-post.html?slug=${post.slug}" class="blog-preview-link">Read More →</a>
                        </div>
                    </div>
                `;
                }).join('')}
            </div>
            <div class="blog-preview-cta">
                <a href="blog.html" class="cta-secondary">View All Blog Posts</a>
            </div>
        `;
    } catch (error) {
        // Silently hide blog section if there's an error
        console.error('Error loading blog preview:', error);
        const section = container.closest('.blog-preview-section');
        if (section) {
            section.style.display = 'none';
        }
    }
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
    // Add a small delay to ensure page is fully loaded
    setTimeout(() => {
        if (document.getElementById('blog-posts')) {
            // Blog listing page
            renderBlogListing();
        } else if (document.getElementById('blog-post-content')) {
            // Blog post detail page
            renderBlogPost();
        } else if (document.getElementById('blog-preview')) {
            // Homepage preview
            renderBlogPreview();
        }
    }, 100);
});

