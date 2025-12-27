# Dietitian Website - Professional Nutrition Services

A clean, biography-style website for a registered dietitian offering one-on-one nutrition consultations with integrated online booking and payment processing.

## 🌿 Overview

This website provides:
- Professional biography and credentials showcase
- Service offerings and pricing
- Online consultation booking system
- Secure payment processing via Stripe
- Intake questionnaire and client management
- Resource library for nutrition information
- Client testimonials and success stories

## 🎯 Key Features

### Professional Design
- Clean, trustworthy, and professional aesthetic
- Personal connection through biography and story
- Trust-building through credentials and client testimonials
- Focus on New York market

### Online Booking & Sales
- Program selection (3-month or 6-month)
- Free discovery call scheduling
- Secure payment processing
- Email confirmation system
- Google Calendar integration

### Client Management
- Google Sheets for data storage
- Intake questionnaire
- Booking tracking
- Payment records

## 🏗️ Tech Stack

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Payment:** Stripe API
- **Storage:** Google Sheets API
- **Calendar:** Google Calendar API
- **Email:** SendGrid

### Frontend
- **Markup:** HTML5
- **Styling:** CSS3
- **JavaScript:** Vanilla JavaScript
- **Design:** Clean, biography-focused layout

### Deployment
- **Container:** Docker (Alpine Linux)
- **Platform:** Google Cloud Run
- **Infrastructure:** Terraform
- **Port:** 8080

## 📁 Project Structure

```
dietitian-website/
├── server/              # Express backend
│   ├── index.js        # Server entry point
│   ├── routes/         # API and page routes
│   └── config/         # Service configurations
├── public/             # Frontend files
│   ├── index.html      # Homepage
│   ├── about.html      # About page
│   ├── services.html   # Services page
│   ├── book.html       # Booking page
│   ├── css/            # Stylesheets
│   └── js/             # JavaScript files
├── terraform/          # Infrastructure as Code
├── Dockerfile          # Container configuration
└── package.json        # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- Docker (for containerization)
- Google Cloud account
- Stripe account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dietitian-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

4. **Run locally**
   ```bash
   npm run dev
   ```

   Visit `http://localhost:8080`

### Required Environment Variables

Create a `.env` file with:

```env
# Server
NODE_ENV=development
PORT=8080
FRONTEND_URL=http://localhost:8080

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Google APIs
GOOGLE_APPLICATION_CREDENTIALS=./config/google-credentials.json
GOOGLE_SHEETS_SHEET_ID=...
GOOGLE_CALENDAR_ID=...

# Email
SENDGRID_API_KEY=...
```

## 📝 Documentation

- [WEBSITE_PLAN.md](./WEBSITE_PLAN.md) - Complete website strategy and content plan
- [SAMPLE_CONTENT.md](./SAMPLE_CONTENT.md) - Ready-to-use content examples

## 🎨 Customization

### Content Updates

1. **Replace placeholders** in `SAMPLE_CONTENT.md` with your information:
   - Your name and credentials
   - Years of experience
   - Consultation pricing
   - Testimonials (gather from real clients)

2. **Update HTML pages** in `public/` folder:
   - `index.html` - Homepage content
   - `about.html` - Biography (needs to be created)
   - `services.html` - Service details (needs to be created)
   - `book.html` - Booking form

3. **Add professional photos:**
   - Replace placeholder in hero section
   - Add headshot to About page
   - Consider adding office photos or food photography

### Styling

Modify `public/css/main.css`:
- Color scheme (CSS variables in `:root`)
- Typography
- Layout spacing
- Component styles

## 🧪 Testing

```bash
# Run development server
npm run dev

# Test booking flow
# Use Stripe test mode: https://stripe.com/docs/testing
```

## 🐳 Docker

### Build Image
```bash
docker build -t dietitian-website .
```

### Run Container
```bash
docker run -p 8080:8080 --env-file .env dietitian-website
```

## ☁️ Deployment

### Deploy to Google Cloud Run

1. **Build and push container:**
   ```bash
   gcloud builds submit --tag gcr.io/YOUR_PROJECT/dietitian-website
   ```

2. **Deploy:**
   ```bash
   gcloud run deploy dietitian-website \
     --image gcr.io/YOUR_PROJECT/dietitian-website \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

## 🔐 Security & Compliance

### HIPAA Considerations
- Use HTTPS in production
- Secure API keys via environment variables
- Implement Business Associate Agreements (BAAs) with:
  - Stripe
  - SendGrid
  - Google (Sheets/Calendar)
- Client data encryption
- Access controls and logging

### Required Disclaimers
- Medical disclaimer (not diagnosing or treating)
- Professional licensing information
- Privacy policy
- Terms of service
- Refund policy

## 📊 Features to Implement

### Completed
- ✅ Basic page structure
- ✅ Booking form
- ✅ Stripe payment integration
- ✅ Navigation and layout
- ✅ Biography-style design

### To Build
- [ ] About page with full biography
- [ ] Services page with detailed offerings
- [ ] Resources page with articles/recipes
- [ ] Testimonials page
- [ ] Google Calendar integration
- [ ] Email confirmations
- [ ] Client intake form
- [ ] Admin dashboard for bookings
- [ ] Analytics integration

## 📞 Support

For questions or issues, refer to:
- Website plan documentation
- Sample content guide
- Stripe documentation: https://stripe.com/docs
- Google APIs documentation

## 📄 License

MIT License - see LICENSE file for details

---

**Ready to launch?** Customize the content, set up your integrations, and deploy to start accepting bookings!
