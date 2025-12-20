<div align="center">
  
<img src="public/astronaut.png" alt="Portfolio Logo" width="64" height="64">

# Portfolio

### My personal space on the web - built with React, Three.js, and a lot of caffeine

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.182.0-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Live Demo](#) • [Report Bug](https://github.com/ethyashpathak/Portfolio/issues) • [Request Feature](https://github.com/ethyashpathak/Portfolio/issues)

</div>

---

## 🎨 What's Inside

This portfolio uses some cool tech to make things look and feel nice:

| Technology | Purpose |
|------------|---------|
| 🎭 **React Three Fiber** | 3D scenes and interactive models |
| ✨ **Framer Motion** | Smooth, buttery animations |
| 🎨 **Tailwind CSS** | Styling that actually makes sense |
| 🎬 **GSAP** | Extra animation power |
| 📧 **EmailJS** | Contact form without backend hassle |
| ⚡ **Vite** | Lightning-fast builds |
| 🌐 **Cobe** | Interactive 3D globe |

## ✨ Features Worth Mentioning

```
✓ Interactive 3D elements (desktop only - mobile gets clean 2D fallbacks)
✓ Mouse-following project previews with spring physics
✓ Responsive design that doesn't suck on mobile
✓ Smooth scroll animations between sections
✓ Contact form that sends emails directly
✓ Performance-optimized 3D rendering
```

## 🚀 Running Locally

<details>
<summary>Click to expand setup instructions</summary>

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1️⃣ Clone the repository
```bash
git clone https://github.com/ethyashpathak/Portfolio.git
cd Portfolio
```

2️⃣ Install dependencies
```bash
npm install
```

3️⃣ Start development server
```bash
npm run dev
```

4️⃣ Open your browser at `http://localhost:5173`

### Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

</details>

## 📁 Project Structure

```
Portfolio/
│
├── 📂 public/              # Static assets
├── 📂 src/
│   ├── 📂 sections/        # Main page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── ...
│   ├── 📂 components/      # Reusable components
│   ├── 📂 constants/       # Project data and constants
│   ├── 📂 assets/          # Images and icons
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
│
├── index.html
├── vite.config.js
└── tailwind.config.js
```

## 🎮 The 3D Stuff

Used **React Three Fiber** to add 3D models and interactions. Kept performance in mind by:

- 🎯 Only rendering 3D on desktop (checked with `react-responsive`)
- 🚫 Disabling pointer events on preview images
- 🌊 Using spring physics instead of direct position updates
- ⚡ Lazy loading 3D assets
- 📱 Progressive enhancement for mobile devices

## 💡 Things I Learned

> **R3F canvas is basically a parallel React tree** (mind = blown)

- Spring physics makes mouse interactions feel way more natural
- Mobile-first design saves headaches later
- Framer Motion and GSAP play well together if you're careful
- WebGL performance optimization is an art form
- Good UX means knowing when NOT to add 3D

## 🛠️ Built With

<div align="center">

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

## 📬 Contact

Got questions or want to collaborate? Hit me up!

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ethyashpathak)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](#)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](#)

</div>

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Built with way too much coffee ☕ and a passion for interactive web experiences**

</div>
