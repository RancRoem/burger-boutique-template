# 🍔 CRAFT & FLAME — Full-Stack Gourmet Burger Restaurant & Ordering Website Template

Thank you for purchasing the **Craft & Flame Full-Stack Restaurant Template**!  
Built with **Next.js 15 (App Router), TypeScript, and Tailwind CSS**, this template comes complete with an interactive menu, persistent shopping cart, delivery/pickup checkout API, table reservation system, and 28 custom studio product visuals.

---

## ✨ Key Features
- **1-File Customization:** Change your restaurant name, logo, prices, opening hours, and menu items in a single configuration file (`src/data/menuData.ts`).
- **Full-Stack Backend APIs Included:**
  - `POST /api/orders` — Validates customer orders, calculates totals, and generates instant order confirmation numbers.
  - `POST /api/reservations` — Processes online table bookings with instant confirmation codes.
- **Persistent Shopping Cart:** Customers can switch between Delivery & Pickup, unlock free delivery thresholds, and keep their cart saved across refreshes.
- **Studio Product Photography Included:** 28 high-resolution studio-lit food & branding images pre-organized in `public/images/`.
- **100% Mobile Responsive & SEO Ready.**

---

## 🚀 Quick Start (Run Locally)

1. **Install Node.js** (version 18 or higher) from [nodejs.org](https://nodejs.org).
2. **Unzip** the downloaded template folder and open a terminal inside the project directory.
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. Open **[http://localhost:3000](http://localhost:3000)** in your browser to view your website!

---

## 🎨 How to Customize Your Restaurant

### 1. Update Brand Info, Hours & Menu Items
Open **`src/data/menuData.ts`**:
- Edit `RESTAURANT_CONFIG` at the top of the file to update your **name, tagline, currency symbol (`$`, `€`, `£`), delivery fees, address, phone number, and opening hours**.
- Edit `MENU_ITEMS` below it to add, remove, or change prices and descriptions for burgers, combos, sides, drinks, and desserts.

### 2. Replace Logo & Photos
All images are stored in **`public/images/`**:
- `public/images/branding/logo.png` — Your restaurant logo
- `public/images/branding/hero-banner.jpg` — Main homepage banner (`16:9` recommended)
- `public/images/branding/about-kitchen.jpg` — About section photo (`4:3` recommended)
- `public/images/burgers/`, `menus/`, `sides/`, `drinks/`, `desserts/` — Menu item photos (`4:3` recommended)

### 3. Change Brand Colors
Open **`tailwind.config.ts`** and update the hex codes under `colors.brand`:
```ts
colors: {
  brand: {
    primary: "#EA580C", // Main button & highlight color
    dark: "#111827",    // Dark section background
    light: "#F9FAFB",   // Light section background
    accent: "#F59E0B",  // Star & badge accent color
  },
}
```

---

## 🌐 Free 1-Click Deployment (Vercel)
1. Upload this project folder to a free **GitHub** repository.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New Project**, select your repository, and click **Deploy**.
4. Your restaurant website will be live with a free SSL domain in under 60 seconds!
