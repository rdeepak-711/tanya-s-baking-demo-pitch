# Tanya's Baking 🎂

A premium, high-performance portfolio website for **Tanya's Baking**, a home-grown FSSAI-approved baking studio in Madambakkam, Chennai.

![Tanya's Baking Preview](public/about.jpeg)

## ✨ Features

- **🎨 Premium Design**: Modern, dark-themed UI with glassmorphism effects, smooth gradients, and animated interactions.
- **📱 Fully Responsive**: Optimized for all devices, from mobile phones to large desktop screens.
- **📸 Instagram Integration**:
  - **Live Portfolio**: Fetches and displays real Instagram posts directly in the gallery.
  - **Smart Embedding**: Uses optimized iframes that fit perfectly within custom-designed cards.
  - **Direct Linking**: Cards link directly to the original Instagram posts for engagement.
- **⚡ High Performance**:
  - **Lazy Loading**: Instagram embeds load only when scrolled into view.
  - **Next.js 14**: Built on the latest React framework for speed and SEO.
  - **Optimized Assets**: Automatic image optimization and font loading.
- **🔍 SEO Optimized**:
  - **Meta Tags**: Comprehensive Open Graph and Twitter card support.
  - **JSON-LD**: Structured data for rich search results.
  - **Accessibility**: Semantic HTML and ARIA labels for better accessibility scores.
- **📝 Easy Content Management**: All text and portfolio data is managed via a single `src/data/content.json` file.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/tanyas-bakery.git
    cd tanyas-bakery
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open your browser**:
    Visit [http://localhost:3000](http://localhost:3000) to see the site live.

## 📂 Project Structure

```
tanyas-bakery/
├── public/              # Static assets (images, icons)
├── src/
│   ├── app/             # Next.js App Router pages & layout
│   ├── components/      # Reusable UI components (Hero, Portfolio, etc.)
│   ├── data/            # JSON content database
│   └── lib/             # Utility functions
├── .gitignore           # Git ignore rules
├── next.config.mjs      # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── README.md            # Project documentation
```

## 📝 Managing Content

To update website content, simply edit `src/data/content.json`.

### **Adding Portfolio Items**
Add a new object to the `portfolio.items` array:

```json
{
  "id": 30,
  "category": "Theme-based cakes",
  "title": "New Cake Design",
  "description": "Description of the cake",
  "instagramUrl": "https://www.instagram.com/p/POST_ID/"
}
```

The website will automatically generate the embed and display it in the correct category.

## 🚢 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

1.  Push your code to a GitHub repository.
2.  Import the project in Vercel.
3.  Click **Deploy**.

## 📄 License

© 2025 Tanya's Baking. All Rights Reserved.
