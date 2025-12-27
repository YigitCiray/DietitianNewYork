# Local Development Guide

## The Issue

When opening `blog.html` directly in a browser using `file://` protocol, the blog posts won't load because:

1. **GitHub API requires CORS** - Browsers block cross-origin requests from `file://` protocol
2. **Local file access** - JavaScript can't directly read local files for security reasons

## Solutions

### Option 1: Use a Local Web Server (Recommended)

Run a simple local web server to test the blog:

#### Using Python (if installed):
```bash
cd public
python3 -m http.server 8000
```
Then open: `http://localhost:8000/blog.html`

#### Using Node.js (if installed):
```bash
cd public
npx http-server -p 8000
```
Then open: `http://localhost:8000/blog.html`

#### Using PHP (if installed):
```bash
cd public
php -S localhost:8000
```
Then open: `http://localhost:8000/blog.html`

### Option 2: Deploy to GitHub Pages

The blog will work automatically once deployed to GitHub Pages:

1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Visit: `https://yigitalpciray.github.io/DietitianNewYork/blog.html`

### Option 3: Update Blog Manifest (For Local Testing)

If you want to test locally without a server, you can:

1. Update `public/blog/blog-manifest.json` with your blog post filenames
2. The JavaScript will try to fetch from local files using relative paths
3. **Note:** This still requires a web server due to browser security restrictions

## Current Setup

The blog system now includes:
- ✅ **GitHub API** - Works when deployed to GitHub Pages
- ✅ **Local Manifest Fallback** - Uses `blog-manifest.json` when GitHub API fails
- ✅ **Automatic Detection** - Tries GitHub API first, falls back to local files

## Testing Locally

1. **Start a local server** (see Option 1 above)
2. **Open** `http://localhost:8000/blog.html`
3. **Check browser console** for any errors
4. **Verify** blog posts load correctly

## Adding New Blog Posts

When you add a new blog post:

1. Add the markdown file to `public/blog/`
2. **For local testing:** Update `public/blog/blog-manifest.json` to include the new file
3. **For production:** The GitHub API will automatically discover new files

### Example: Updating blog-manifest.json

```json
[
  {
    "filename": "2024-12-27-probiotics-during-pregnancy.md",
    "slug": "2024-12-27-probiotics-during-pregnancy"
  },
  {
    "filename": "2024-12-28-folate-vs-folic-acid.md",
    "slug": "2024-12-28-folate-vs-folic-acid"
  },
  {
    "filename": "2025-01-15-new-post.md",
    "slug": "2025-01-15-new-post"
  }
]
```

## Troubleshooting

### "No blog posts found"
- Make sure you're using a web server (not `file://`)
- Check browser console for errors
- Verify `blog-manifest.json` exists and is valid JSON
- Ensure blog markdown files are in `public/blog/` folder

### "Failed to fetch"
- Check that blog files exist in the correct location
- Verify file names match the manifest
- Check browser console for specific error messages

### Blog works on GitHub Pages but not locally
- This is expected - GitHub API works on deployed site
- Use local server for testing (see Option 1)
- Or update `blog-manifest.json` for local testing

---

**Recommendation:** Use a local web server for development, and deploy to GitHub Pages for production. The blog will work automatically once deployed!

