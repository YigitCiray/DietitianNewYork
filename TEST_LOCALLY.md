# Testing Locally - Quick Guide

## The Problem

If you're opening `index.html` directly in your browser (using `file://`), you won't see the blog changes because:
- JavaScript can't fetch from GitHub API using `file://` protocol
- Browser security blocks local file access

## Solution: Use a Local Web Server

### Quick Start (Python - Easiest)

1. **Open Terminal** in your project folder

2. **Run this command:**
   ```bash
   cd public
   python3 -m http.server 8000
   ```

3. **Open your browser** and go to:
   ```
   http://localhost:8000/index.html
   ```

4. **To see blog with thumbnails:**
   ```
   http://localhost:8000/blog.html
   ```

5. **Stop the server:** Press `Ctrl+C` in the terminal

### Alternative: Node.js

```bash
cd public
npx http-server -p 8000
```

Then visit: `http://localhost:8000/index.html`

### Hard Refresh (Clear Cache)

If you still don't see changes:
- **Chrome/Edge:** `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- **Firefox:** `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- **Safari:** `Cmd+Option+R`

## What You Should See

After starting the local server and visiting `http://localhost:8000/index.html`:

1. **Homepage** should show:
   - "Latest from the Blog" section
   - Blog preview cards with thumbnails (if blog posts have thumbnails)

2. **Blog page** (`http://localhost:8000/blog.html`) should show:
   - List of all blog posts
   - Thumbnail images on each post card

3. **Individual blog post** should show:
   - Large thumbnail at the top
   - Full blog content

## Troubleshooting

### Still not seeing changes?

1. **Check browser console** (F12 → Console tab) for errors
2. **Verify files are saved** - Make sure you saved all the files
3. **Check the server is running** - You should see server output in terminal
4. **Try a different browser** - Sometimes cache issues are browser-specific

### Blog posts not loading?

- The blog tries to fetch from GitHub API first
- If that fails, it tries to use `blog/blog-manifest.json`
- For local testing, make sure `blog/blog-manifest.json` exists and is up to date

---

**Remember:** Always use `http://localhost:8000/` not `file://` when testing!

