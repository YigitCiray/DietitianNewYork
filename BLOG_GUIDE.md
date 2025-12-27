# Blog Guide - How to Add New Blog Posts

## Quick Steps

1. Go to GitHub → `public/blog/` folder
2. Click "Add file" → "Create new file"
3. Name: `YYYY-MM-DD-post-title.md`
4. Add frontmatter and content
5. Commit and push - blog appears automatically!

## File Format

```markdown
---
title: Your Blog Post Title
date: 2024-12-27
excerpt: Brief 1-2 sentence description
category: Pregnancy Nutrition
thumbnail: images/your-image.jpg
---

# Your Post Title

Your content here in Markdown...
```

## Frontmatter Fields

- **title** (required): Blog post title
- **date** (required): Publication date in `YYYY-MM-DD` format
- **excerpt** (required): Short description (1-2 sentences)
- **category** (optional): Category name
- **thumbnail** (optional): Image path (e.g., `images/photo.jpg`)

## Adding Thumbnail Images

1. Upload image to `public/images/` folder in GitHub
2. Reference in frontmatter: `thumbnail: images/filename.jpg`
3. Image appears automatically on homepage, blog listing, and post pages
4. Recommended size: 1200x630px

## Markdown Basics

- `#` Main heading
- `##` Section heading
- `**bold**` and `*italic*`
- `-` Bullet lists
- `1.` Numbered lists

---

**That's it!** Just add the markdown file and push to GitHub.
