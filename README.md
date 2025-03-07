# Smart Paperless IPD Website

A modern website for Smart Paperless IPD, a solution that digitizes hospital workflows while preserving the comfort of writing.

## Features

- Responsive design for all device sizes
- Modern UI with smooth animations
- Contact form integration with Formspree
- Optimized images and performance
- Interactive 3D Earth visualization on the Environmental Impact page
- SEO optimized with metadata

## Tech Stack

- Next.js 14
- React
- Tailwind CSS
- TypeScript
- Three.js (for 3D visualizations)
- Framer Motion (for animations)

## Development

First, clone the repository:

```bash
git clone https://github.com/karankk07/SmartIPD-website.git
cd SmartIPD-website
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create a production build:

```bash
npm run build
```

To test the production build locally:

```bash
npm run start
```

## Deployment

This website is configured for easy deployment on Vercel:

1. Push your changes to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy your website

Alternatively, you can deploy to any static hosting service:

1. Build the project: `npm run build`
2. Upload the contents of the `.next` folder to your hosting provider
3. Configure your server to serve the static files

## Pages

- **Home**: Introduction to Smart Paperless IPD
- **Environmental Impact**: Showcases how the solution reduces paper usage with an interactive 3D Earth visualization
- **Contact**: Contact form for inquiries

## License

This project is licensed under the MIT License. 