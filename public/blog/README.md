# Blog Posts

This folder contains all blog posts in Markdown format.

## How to Add a New Blog Post

1. **Create a new file** in this folder with the naming format:
   ```
   YYYY-MM-DD-post-title.md
   ```
   Example: `2024-12-27-probiotics-during-pregnancy.md`

2. **Add frontmatter** at the top of your file:
   ```markdown
   ---
   title: Your Blog Post Title
   date: 2024-12-27
   excerpt: A brief description that appears in blog listings
   category: Category Name
   ---
   ```

3. **Write your content** in Markdown format below the frontmatter.

4. **Commit and push** to GitHub - the blog will automatically appear on the website!

## Frontmatter Fields

- **title** (required): The title of your blog post
- **date** (required): Publication date in YYYY-MM-DD format
- **excerpt** (required): Short description (1-2 sentences) shown in listings
- **category** (optional): Category for organizing posts (e.g., "Pregnancy Nutrition", "Family Health")
- **thumbnail** (optional): Path to thumbnail image (e.g., `images/thumbnail.jpg`). Image should be in the `public/images/` folder. Recommended size: 1200x630px for best display.

## Markdown Tips

- Use `#` for main heading
- Use `##` for subheadings
- Use `**bold**` for bold text
- Use `*italic*` for italic text
- Use `-` for bullet lists
- Use `1.` for numbered lists
- Use `> ` for blockquotes

## Example Blog Post Structure

```markdown
---
title: Your Post Title
date: 2024-12-27
excerpt: Brief description here
category: Pregnancy Nutrition
thumbnail: images/your-image.jpg
---

# Your Post Title

Introduction paragraph...

## Section Heading

Content here...

## Another Section

More content...
```

## Adding Thumbnail Images

1. **Add your image** to the `public/images/` folder
2. **Reference it in frontmatter** using the `thumbnail` field:
   ```markdown
   thumbnail: images/your-image.jpg
   ```
3. **Image path** should be relative to the `public/` folder
4. **Recommended size**: 1200x630px (or similar aspect ratio) for best display
5. **Supported formats**: JPG, PNG, WebP

**Note:** If you don't include a thumbnail, the blog post will display without an image (which is perfectly fine!).

