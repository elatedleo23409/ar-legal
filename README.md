# AR Legal Associates - Law Firm Website

A modern, responsive website for AR Legal Associates, a law firm based in Kochi, Kerala. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📱 Fully responsive design that works seamlessly on all devices
- 🎨 Professional design with elegant color scheme tailored for a law firm
- 🧩 Modular component architecture for easier maintenance
- ✨ Interactive UI elements with smooth animations
- 📊 Contact form for client inquiries
- 🌐 Google Maps integration for office location

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** Material Symbols Outlined and Font Awesome
- **Deployment:** Ready for Vercel deployment

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css      # Global CSS and imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
│
└── components/          # Reusable components
    ├── AboutSection.tsx     # About the firm section
    ├── BlogSection.tsx      # Legal insights & resources
    ├── ContactSection.tsx   # Contact form and office details
    ├── Footer.tsx           # Website footer
    ├── Hero.tsx             # Landing banner/hero section
    ├── Logo.tsx             # Company logo component
    ├── Navbar.tsx           # Navigation bar
    ├── PracticeArea.tsx     # Individual practice area card
    ├── PracticeAreas.tsx    # Practice areas section
    ├── SectionHeading.tsx   # Reusable section heading
    ├── TeamSection.tsx      # Team members showcase
    └── Testimonials.tsx     # Client testimonials section
```

## Component Customization

Each section of the website is built as a standalone component, making it easy to:

- Customize content without affecting the layout
- Add/remove sections as needed
- Maintain consistent styling across the site

## Styling

The site uses a carefully crafted Tailwind CSS configuration with:

- Custom color palette optimized for a professional law firm
- Consistent typography with Roboto as the primary font
- Material design icons integration
- Responsive design with mobile-first approach

## Deployment

Deploy your own instance:

```bash
# Build for production
npm run build

# Start production server
npm run start
```

Alternatively, deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Far-legal)

## License

[MIT](LICENSE)
