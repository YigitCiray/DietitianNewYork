# Dietitian New York - Static Website

A clean, professional static website for Merve Ciray, MS, RDN, CDN - Registered Dietitian in New York, offering personalized nutrition consultation programs.

## 🌿 Overview

This is a static website that provides:
- Professional biography and credentials showcase
- Consultation program information (3-month and 6-month programs)
- Direct Stripe payment links for program purchases
- Calendly integration for discovery calls
- Clean, modern design with Playfair Display and Inter fonts

## 🎯 Key Features

### Professional Design
- Clean, trustworthy, and professional aesthetic
- Personal connection through biography and story
- Trust-building through credentials
- Soft sage green and terracotta color palette

### Payment Integration
- Direct Stripe payment links for 3-month and 6-month programs
- No backend required - simple and secure
- Calendly integration for free discovery calls

## 🏗️ Tech Stack

### Frontend Only
- **Markup:** HTML5
- **Styling:** CSS3
- **JavaScript:** Vanilla JavaScript (minimal)
- **Fonts:** Playfair Display (headings), Inter (body)
- **Payment:** Stripe Payment Links (direct links)

## 📁 Project Structure

```
dietitian-new-york/
├── public/             # All website files
│   ├── index.html      # Homepage
│   ├── about.html      # About page
│   ├── css/
│   │   └── main.css    # Main stylesheet
│   ├── js/
│   │   └── main.js     # Main JavaScript
│   └── images/         # Images
├── package.json        # Minimal package.json
└── README.md           # This file
```

## 🚀 Deployment

This is a static website and can be deployed to any static hosting service:

### Option 1: GitHub Pages (Free)
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder (`/public` or root)
4. Your site will be live at `username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Drag and drop the `public` folder to Netlify
2. Or connect your GitHub repository
3. Automatic HTTPS and custom domain support

### Option 3: Vercel (Free)
1. Connect GitHub repository
2. Vercel auto-detects static site
3. Automatic deployments on push

### Option 4: Any Static Host
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Cloudflare Pages

## 📝 Setup Instructions

### Local Development
1. Simply open `public/index.html` in a browser
2. Or use a local server:
   ```bash
   # Python
   cd public && python -m http.server 8000
   
   # Node.js (if you have http-server installed)
   npx http-server public -p 8000
   ```

### Before Deploying
1. **Update Stripe Payment Links:**
   - Replace `https://buy.stripe.com/YOUR_3MONTH_LINK` in `public/index.html`
   - Replace `https://buy.stripe.com/YOUR_6MONTH_LINK` in `public/index.html`
   - Get your payment links from Stripe Dashboard → Products → Payment Links

2. **Update Calendly Link:**
   - Update the Calendly discovery call link if needed
   - Currently: `https://calendly.com/dietitiannewyork/15min?back=1&month=2025-12`

3. **Custom Domain (Optional):**
   - Configure DNS settings with your hosting provider
   - Update any hardcoded URLs if needed

## 🎨 Customization

### Colors
Colors are defined in `public/css/main.css`:
- Primary: Soft Sage Green `#7FA8A1`
- Primary Dark: Deep Sage Green `#5F7F73`
- Secondary: Warm Clay/Terracotta `#C97A63`
- Text: Charcoal `#2F2F2F`
- Background: Creamy Off-White `#FAF7F3`

### Fonts
- Headlines: Playfair Display (loaded from Google Fonts)
- Body: Inter (loaded from Google Fonts)

## 📞 Contact

For questions about the website, contact: hello@dietitiannewyork.com

## 📄 License

MIT License

---

**Note:** This is a static website. All payment processing is handled directly through Stripe Payment Links - no backend server required.
