# Tshegofentse - Hazardous Waste & Analytical Services

A modern, responsive website for Tshegofentse, a leading provider of hazardous waste management and analytical services. This website showcases the company's commitment to environmental responsibility and sustainable waste management solutions.

## Features

- **Modern Design**: Clean, professional interface with lime green accents and a focus on environmental sustainability
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Interactive Components**: Engaging UI with smooth animations and hover effects
- **Service Showcase**: Comprehensive accordion-style service listings with detailed descriptions
- **Process Visualization**: Clear 6-step process cards explaining the waste management workflow
- **Industries Served**: Grid layout showcasing all sectors the company serves
- **Contact Integration**: Easy-to-use contact form with company information

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans, Geist Mono, Playfair Display

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── navbar.tsx          # Top navigation with info bar
│   ├── hero.tsx            # Hero section with CTA
│   ├── services-accordion.tsx  # Expandable services section
│   ├── stepwise-process.tsx    # 6-step process cards
│   ├── industries-grid.tsx     # Industries served grid
│   ├── contact-section.tsx     # Contact form and info
│   └── footer.tsx          # Footer with navigation and social links
└── public/                 # Static assets
\`\`\`

## Design System

### Color Palette
- **Primary**: Lime Green (#84CC16) - Environmental, growth, sustainability
- **Secondary**: Dark Slate (#1E293B) - Professional, trustworthy
- **Background**: White/Light Gray - Clean, modern
- **Accent**: Lighter green shades for hover states

### Typography
- **Headings**: Playfair Display (Serif) - Elegant, professional
- **Body**: Geist Sans - Clean, readable
- **Code**: Geist Mono - Technical documentation

## Key Sections

### 1. Navigation
- Info bar with email and phone
- Sticky navigation with smooth scroll
- Mobile-responsive hamburger menu
- Social media links

### 2. Hero
- Full-width background image
- Compelling headline and tagline
- Call-to-action buttons
- Scroll indicator

### 3. Services
- Accordion-style expandable sections
- Five core services:
  - Hazardous Waste Treatment & Disposal
  - Waste Classification & Analytical Testing
  - Environmental Consulting
  - Training & Compliance
  - Emergency Response
- Service images and detailed descriptions

### 4. Process
- Six-step waste management process
- Icon-based card design
- Clear, sequential workflow
- Steps: Consultation → Assessment → Planning → Implementation → Monitoring → Reporting

### 5. Industries
- Eight industry sectors served
- Grid layout with hover effects
- Industries include: Manufacturing, Healthcare, Mining, Automotive, Construction, Chemical, Oil & Gas, Agriculture

### 6. Contact
- Contact form (Name, Email, Phone, Service, Message)
- Company contact information
- Office hours
- Physical address

### 7. Footer
- Quick links navigation
- Services overview
- Contact details
- Social media links
- Copyright information

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd tshegofentse-website
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

## Customization

### Updating Colors
Edit the design tokens in `app/globals.css`:
\`\`\`css
--primary: 84 204 22;        /* Lime green */
--secondary: 30 41 59;       /* Dark slate */
\`\`\`

### Updating Content
- **Services**: Edit `components/services-accordion.tsx`
- **Process Steps**: Edit `components/stepwise-process.tsx`
- **Industries**: Edit `components/industries-grid.tsx`
- **Contact Info**: Edit `components/contact-section.tsx` and `components/footer.tsx`

### Adding Pages
Create new page files in the `app/` directory following Next.js App Router conventions.

## Performance

- Optimized images with Next.js Image component
- Lazy loading for off-screen content
- Minimal JavaScript bundle size
- Fast page loads with server-side rendering

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- Proper color contrast ratios

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Tshegofentse

## Contact

For more information about Tshegofentse services:
- **Email**: info@tshegofentse.co.za
- **Phone**: +27 (0)11 123 4567
- **Website**: https://tshegofentse.co.za

---

Built with Next.js and deployed on Vercel
