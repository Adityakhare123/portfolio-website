# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ⚡ Fast development with Vite
- 🎨 Responsive design with Tailwind CSS
- 📱 Mobile-friendly layout
- 🚀 Easy deployment
- 📧 Contact form integration
- 🎯 Smooth scrolling navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
portfolio-website/
├── public/              # Static files
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   ├── data/           # Static data
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── README.md
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme.

### Content

Update the components and data in `src/` to add your own portfolio content.

### Fonts

Customize fonts in `tailwind.config.js` or add custom fonts in `src/index.css`.

## Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command to `npm run build`
4. Set publish directory to `dist`

### GitHub Pages

1. Add to `package.json`: `"homepage": "https://username.github.io/portfolio-website"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`
4. Run `npm run deploy`

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JavaScript](https://www.javascript.com/)

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, feel free to reach out!
