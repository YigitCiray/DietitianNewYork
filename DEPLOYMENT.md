# GitHub Pages Deployment Guide

## Quick Setup Steps

### Option 1: Using GitHub Pages Settings (Easiest)

1. **Go to your repository on GitHub:**
   - Navigate to: https://github.com/YigitCiray/DietitianNewYork

2. **Go to Settings:**
   - Click on "Settings" tab in your repository

3. **Go to Pages:**
   - In the left sidebar, click "Pages"
   - Or go directly to: https://github.com/YigitCiray/DietitianNewYork/settings/pages

4. **Configure Source:**
   - Under "Source", select: **"Deploy from a branch"**
   - Branch: Select **"main"** (or "master" if that's your default)
   - Folder: Select **"/ (root)"** 
   - Click "Save"

5. **Wait for deployment:**
   - GitHub will build and deploy your site
   - Your site will be available at: `https://yigitalpciray.github.io/DietitianNewYork/`
   - This may take 1-2 minutes

### Option 2: Using GitHub Actions (Recommended - Already Configured)

The repository includes a GitHub Actions workflow that automatically deploys when you push to main.

1. **Push your code:**
   ```bash
   git add .
   git commit -m "Initial commit for GitHub Pages"
   git push origin main
   ```

2. **GitHub will automatically:**
   - Detect the workflow
   - Build and deploy from the `/public` folder
   - Your site will be live in 1-2 minutes

3. **Check deployment status:**
   - Go to "Actions" tab in your repository
   - You'll see the deployment progress

## Important Notes

### File Structure
Since your files are in the `public/` folder, GitHub Pages needs to serve from that directory. The workflow I created handles this automatically.

### Custom Domain (Optional)
If you want to use `dietitiannewyork.com`:

1. In GitHub Pages settings, add your custom domain
2. Update your DNS records:
   - Add a CNAME record pointing to: `yigitalpciray.github.io`
   - Or A records pointing to GitHub's IP addresses

### After Deployment

1. **Update Stripe Links:**
   - Replace `YOUR_3MONTH_LINK` with your actual Stripe payment link
   - Replace `YOUR_6MONTH_LINK` with your actual Stripe payment link

2. **Test your site:**
   - Visit: `https://yigitalpciray.github.io/DietitianNewYork/`
   - Check all links work
   - Test navigation
   - Verify images load

## Troubleshooting

### If site doesn't load:
- Check the "Actions" tab for any errors
- Verify the branch name matches (main vs master)
- Wait a few minutes - first deployment can take longer

### If images don't load:
- Verify image paths are relative (they should be)
- Check that images are committed to the repository

### If navigation doesn't work:
- Verify all links use relative paths (we fixed these)
- Check browser console for errors

## Your Site URL

After deployment, your site will be available at:
- **GitHub Pages URL:** `https://yigitalpciray.github.io/DietitianNewYork/`
- **Custom Domain:** (if configured) `https://dietitiannewyork.com`

---

**Need help?** Check GitHub Pages documentation: https://docs.github.com/en/pages

