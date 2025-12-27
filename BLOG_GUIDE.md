# Blog Guide - How to Add New Blog Posts

This guide explains how to add new blog posts to the Dietitian New York website using GitHub.

## Quick Start

1. Go to your GitHub repository: `https://github.com/YigitCiray/DietitianNewYork`
2. Navigate to the `public/blog/` folder
3. Click "Add file" → "Create new file"
4. Follow the naming and format guidelines below
5. Commit and push - your blog post will appear automatically!

## File Naming Convention

**Format:** `YYYY-MM-DD-post-title.md`

**Examples:**
- `2024-12-27-probiotics-during-pregnancy.md`
- `2024-12-28-folate-vs-folic-acid.md`
- `2025-01-15-meal-prep-tips.md`

**Important:**
- Use hyphens (`-`) not underscores or spaces
- Start with the date in YYYY-MM-DD format
- Use lowercase for the title portion
- End with `.md` extension

## Blog Post Format

Each blog post must start with **frontmatter** (metadata) followed by your content in Markdown format.

### Frontmatter Template

```markdown
---
title: Your Blog Post Title Here
date: 2024-12-27
excerpt: A brief 1-2 sentence description that appears in blog listings and previews
category: Pregnancy Nutrition
---
```

### Frontmatter Fields

- **title** (required): The full title of your blog post
- **date** (required): Publication date in `YYYY-MM-DD` format
- **excerpt** (required): Short description (1-2 sentences) shown in blog listings
- **category** (optional): Category name (e.g., "Pregnancy Nutrition", "Family Health", "Recipes")

### Content Section

After the frontmatter, write your blog post content in Markdown:

```markdown
---
title: Your Blog Post Title
date: 2024-12-27
excerpt: Brief description
category: Pregnancy Nutrition
---

# Your Main Heading

Introduction paragraph here...

## Section Heading

Content for this section...

### Subsection

More detailed content...

## Another Section

- Bullet point one
- Bullet point two
- Bullet point three

**Bold text** and *italic text* work too!
```

## Markdown Cheat Sheet

### Headings
```markdown
# Main Heading (H1)
## Section Heading (H2)
### Subsection (H3)
```

### Text Formatting
```markdown
**bold text**
*italic text*
```

### Lists
```markdown
- Bullet point
- Another point

1. Numbered item
2. Another item
```

### Links
```markdown
[Link text](https://example.com)
```

### Blockquotes
```markdown
> This is a quote or important note
```

### Paragraphs
Separate paragraphs with a blank line.

## Complete Example

Here's a complete example blog post:

```markdown
---
title: Probiotics During Pregnancy: What You Need to Know
date: 2024-12-27
excerpt: Understanding the safety and benefits of probiotics during pregnancy, including which strains are best supported by research.
category: Pregnancy Nutrition
---

# Probiotics During Pregnancy: What You Need to Know

As a registered dietitian specializing in prenatal nutrition, I often get questions about probiotics during pregnancy.

## Are Probiotics Safe During Pregnancy?

The short answer is: **Yes, probiotics are generally considered safe during pregnancy** when consumed in food form.

## Benefits of Probiotics During Pregnancy

Research suggests that probiotics may offer several benefits:

### 1. Digestive Health
Pregnancy can bring about digestive challenges. Probiotics can help maintain a healthy gut microbiome.

### 2. Immune Support
A healthy gut microbiome is closely linked to immune function.

## Best Probiotic Sources

- **Yogurt** with live and active cultures
- **Kefir** (fermented milk drink)
- **Sauerkraut** and other fermented vegetables

## The Bottom Line

Probiotics can be a valuable addition to your prenatal nutrition plan.

---

*This article is for informational purposes only and is not a substitute for professional medical advice.*
```

## Step-by-Step Instructions

### For Collaborators (Non-Technical Users)

1. **Go to GitHub Repository**
   - Navigate to: `https://github.com/YigitCiray/DietitianNewYork`
   - You may need to be added as a collaborator first

2. **Go to Blog Folder**
   - Click on `public` folder
   - Click on `blog` folder

3. **Create New File**
   - Click "Add file" button (top right)
   - Select "Create new file"

4. **Name Your File**
   - In the filename field, enter: `2024-12-27-your-post-title.md`
   - Replace the date and title with your actual values

5. **Add Content**
   - Copy the frontmatter template above
   - Fill in your title, date, excerpt, and category
   - Write your blog post content below the frontmatter

6. **Preview (Optional)**
   - Scroll down to see a preview of your markdown

7. **Commit Changes**
   - Scroll to the bottom of the page
   - In "Commit new file" section:
     - Add a commit message: "Add blog post: [Your Title]"
     - Click "Commit new file" button

8. **Wait for Deployment**
   - GitHub Pages will automatically update
   - Your blog post will appear within 1-2 minutes
   - Check: `https://yigitalpciray.github.io/DietitianNewYork/blog.html`

### For Developers (Using Git)

```bash
# Navigate to project
cd DietitianNewYork

# Create new blog post
touch public/blog/2024-12-27-your-post-title.md

# Edit the file (add frontmatter and content)
# Then commit and push

git add public/blog/2024-12-27-your-post-title.md
git commit -m "Add blog post: Your Title"
git push origin main
```

## Tips for Great Blog Posts

1. **Write Clear Titles**: Make titles descriptive and search-friendly
2. **Keep Excerpts Short**: 1-2 sentences that summarize the post
3. **Use Headings**: Break up content with H2 and H3 headings
4. **Add Examples**: Include practical examples and tips
5. **Use Lists**: Bullet points make content scannable
6. **Include Disclaimers**: Add medical disclaimers when appropriate

## Troubleshooting

### Blog Post Not Appearing
- Check that the filename follows the correct format
- Verify the frontmatter is correct (check for typos)
- Wait 2-3 minutes for GitHub Pages to rebuild
- Clear your browser cache

### Formatting Issues
- Make sure you're using proper Markdown syntax
- Check that frontmatter is separated by `---` on both sides
- Verify there's a blank line after the frontmatter

### Images (Future Feature)
- Currently, images are not supported
- For now, use external image URLs if needed
- Image support can be added later if needed

## Questions?

If you need help:
1. Check the `public/blog/README.md` file
2. Review existing blog posts as examples
3. Contact the website administrator

---

**Last Updated:** December 2024

