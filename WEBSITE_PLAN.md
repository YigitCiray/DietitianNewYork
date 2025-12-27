# Dietitian New York Website - Complete Plan

## Executive Summary
A clean, professional website for Merve Ciray, MS, RDN, CDN - a registered dietitian serving New York. The site offers comprehensive 3-month and 6-month nutrition programs with integrated online booking and emphasizes sustainable, non-restrictive nutrition approaches.

---

## 1. Core Identity

### About Me Section (Professional Biography)

**Primary Bio (150 words):**
I'm a registered dietitian passionate about helping individuals achieve their health goals through personalized nutrition guidance. With [X years] of experience and a Master's degree in Clinical Nutrition, I've helped hundreds of clients transform their relationship with food and discover lasting wellness strategies.

My approach is rooted in evidence-based practice, but it's the individual connection that makes the difference. I believe in meeting people where they are—no judgment, no one-size-fits-all solutions, just honest conversations about what works for your unique body and lifestyle.

Whether you're navigating a specific health condition, looking to optimize your performance, or simply wanting to feel more energized in your daily life, I'm here to listen, guide, and support you every step of the way. Every client is different, and so should be your nutrition plan.

### Homepage Headlines

**Option 1:**
# Personalized Nutrition, Real Results

**Option 2:**
# Your Health Journey Starts Here

**Option 3:**
# Evidence-Based Nutrition Made Personal

---

## 2. Service Model

### How It Works: Your Path to Better Nutrition

#### Step 1: Discovery & Intake
Complete our confidential intake questionnaire about your health history, goals, current eating patterns, and lifestyle. This helps us prepare the most valuable session for you.

#### Step 2: Book Your Session
Choose your consultation type and select an available appointment time. Secure your spot with instant online payment via our encrypted system.

#### Step 3: Your One-on-One Session
Meet virtually (Zoom/Google Meet) for a personalized, judgment-free consultation. We'll discuss your goals, review your current habits, and create a customized nutrition strategy together.

#### Step 4: Your Personalized Plan
Receive your comprehensive nutrition plan within 48 hours via email, including meal guidance, recipes, shopping lists, and ongoing support resources.

### Client Deliverables (5 Concrete Results)

✓ **Custom Meal Plan** - Tailored to your preferences, allergies, cultural background, and schedule

✓ **Detailed Nutrient Analysis** - Review of your current intake with specific recommendations

✓ **Grocery Shopping Guide** - Organized lists to make healthy eating convenient and sustainable

✓ **Meal Prep Strategies** - Practical tips and recipes designed for your lifestyle and time constraints

✓ **Follow-Up Support Package** - Resources, FAQs, and 2 weeks of email support for questions

---

## 3. Technical & Payment Integration

### Secure Payment Notice

```
🔒 Secure Payment Processing
Your payment is processed securely through Stripe. All information is encrypted and compliant with HIPAA standards. Book with complete confidence.
```

### Call-to-Action (CTA) Phrases

**Primary CTA:**
- "Book Your Consultation"
- "Start Your Journey"
- "Schedule Now"

**Secondary CTA:**
- "Learn More About Me"
- "View My Approach"
- "See Services"

### Backend Structure

#### Pages Required
1. **Home** (`/`) - Hero, about preview, services overview, CTA
2. **About** (`/about`) - Full biography, credentials, philosophy, approach
3. **Services** (`/services`) - Consultation types, what's included, pricing
4. **Book** (`/book`) - Booking form with Stripe payment integration
5. **Resources** (`/resources`) - Helpful articles, recipes, guides
6. **Testimonials** (`/testimonials`) - Client success stories
7. **Thank You** (`/thank-you`) - Post-booking confirmation

#### Key Components

**Frontend Components:**
- Hero section with biography headline
- About preview section
- Services grid
- Testimonials carousel
- Booking CTA buttons
- Footer with contact info

**Backend API Endpoints:**
- `POST /api/booking` - Create appointment booking
- `POST /api/intake` - Submit intake questionnaire
- `POST /api/payment/create-session` - Stripe checkout session
- `POST /api/payment/webhook` - Stripe webhook handler
- `GET /api/availability` - Fetch available appointment slots
- `POST /api/contact` - Contact form submissions

**Data Storage (Google Sheets API):**
- Bookings tracking sheet
- Client intake forms
- Payment records
- Session notes
- Client progress tracking

---

## 4. Page Structure

### Navigation Hierarchy

```
Home (/)
├── About (/about)
├── Services (/services)
├── Book (/book)
├── Resources (/resources)
└── Testimonials (/testimonials)
```

### Page Descriptions

#### **Home Page** (`/`)
- **Primary Content:**
  - Hero with headline and professional photo
  - Brief "About Me" preview (3-4 sentences)
  - "My Approach" section (methodology, philosophy)
  - Services preview grid
  - Featured testimonial
  - Prominent "Book Consultation" CTA

#### **About Page** (`/about`)
- **Primary Content:**
  - Extended biography with personal story
  - Professional credentials and education
  - Licenses and certifications
  - Philosophy and approach to nutrition counseling
  - Why I do this work (personal mission)
  - Professional photo gallery
  - Contact information
  - "Ready to Work Together?" CTA

#### **Services Page** (`/services`)
- **Primary Content:**
  - Detailed service descriptions
  - Consultation types:
    - Initial Consultation (90 mins) - $[X]
    - Follow-Up Session (60 mins) - $[X]
    - Meal Planning Package - $[X]
  - What's included in each service
  - Comparison table
  - FAQ section
  - Booking CTA

#### **Book Page** (`/book`)
- **Primary Content:**
  - Consultation options with pricing
  - Calendar widget for availability
  - Secure payment integration
  - Intake questionnaire
  - Privacy and cancellation policy
  - HIPAA compliance notice
  - Success message after booking

#### **Resources Page** (`/resources`)
- **Primary Content:**
  - Blog articles on nutrition topics
  - Recipe collections
  - Meal prep guides
  - Educational downloads
  - Newsletter signup
  - Links to trusted resources

#### **Testimonials Page** (`/testimonials`)
- **Primary Content:**
  - Client success stories
  - Before/after case studies (anonymized)
  - Video testimonials (optional)
  - Ratings and reviews
  - Client transformation stories

---

## 5. Design Principles

### Biography Style
- **Personal Connection**: Large, welcoming professional photos
- **Clean Typography**: Easy-to-read, approachable fonts
- **Warm Colors**: Soft, inviting color palette (whites, soft greens/blues)
- **Spacious Layout**: Plenty of whitespace for easy reading
- **Authenticity**: Genuine, conversational tone throughout

### Trust-Building Elements
- Professional credentials prominently displayed
- Client testimonials and success stories
- HIPAA compliance messaging
- Transparent pricing
- Clear cancellation policy
- Professional headshot
- License numbers displayed

### User Journey Optimization
1. **Land**: See professional, trustworthy profile
2. **Learn**: Understand approach and services
3. **Trust**: Read testimonials and credentials
4. **Decide**: View pricing and what's included
5. **Book**: Simple, secure booking process

---

## 6. Content Strategy

### Tone & Voice
- **Professional yet warm**
- Personal and relatable
- Evidence-based but accessible
- Non-judgmental and supportive
- Clear and educational

### Key Messaging Points
1. Personalized approach tailored to each individual
2. Evidence-based nutrition grounded in science
3. Sustainable changes, not quick fixes
4. Judgment-free environment
5. Ongoing support and accountability

---

## 7. Success Metrics

### Primary KPIs
- Booking conversion rate
- Completed consultations
- Client retention rate
- Average consultation value
- Client satisfaction scores

### Secondary KPIs
- Site traffic and engagement
- Resource downloads
- Email signups
- Contact form submissions
- Time spent on site

---

## 8. Compliance & Legal

### HIPAA Considerations
- Secure data transmission (HTTPS)
- Encrypted payment processing
- Client confidentiality policies
- Informed consent documentation
- Business Associate Agreements (BAAs) with third-party services

### Required Disclaimers
- Medical disclaimer (nutrition advice, not medical diagnosis)
- Scope of practice statement
- Professional licensing information
- Refund and cancellation policy
- Privacy policy

---

## 9. Launch Checklist

### Content
- [ ] Professional photos ready
- [ ] Biography written and reviewed
- [ ] Services defined and priced
- [ ] Intake questionnaire finalized
- [ ] Testimonials gathered (minimum 3-5)
- [ ] Resources created (articles, recipes)
- [ ] Legal disclaimers reviewed by legal counsel

### Technical
- [ ] Stripe account configured
- [ ] Google Sheets set up for data tracking
- [ ] Calendar integration working
- [ ] Email service configured
- [ ] HIPAA compliance measures in place
- [ ] All forms tested
- [ ] Payment processing tested
- [ ] Mobile responsiveness verified

### Pre-Launch
- [ ] Domain registered and configured
- [ ] SSL certificate active
- [ ] Analytics tracking implemented
- [ ] Privacy policy published
- [ ] Terms of service published
- [ ] Test complete booking flow end-to-end
- [ ] Email notifications working

---

**Document Version:** 1.0  
**Last Updated:** [Current Date]  
**Status:** Planning Phase
