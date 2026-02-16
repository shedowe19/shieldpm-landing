# ShieldPM - Secure Nginx Proxy Manager

A modern, responsive landing page and configuration generator for **ShieldPM**, a secure Nginx Proxy Manager with built-in WAF (ModSecurity, CrowdSec) and HTTP/3 support.

![ShieldPM Preview](public/og-image.png)

## 🚀 Features

- **Docker Compose Generator**: Interactive tool to generate a production-ready `compose.yaml` for ShieldPM, customizing:
  - Database backend (SQLite, MySQL, PostgreSQL)
  - ACME / SSL settings
  - Security modules (OpenAppSec, CrowdSec)
  - Advanced Nginx tuning (Worker processes, file descriptors)
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop (includes mobile burger menu).
- **Modern UI**: Built with a "dark mode" aesthetic using Tailwind CSS and glassmorphism effects.
- **SPA Routing**: Configured for seamless client-side routing on GitHub Pages.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Deployment**: GitHub Pages

## 📦 Installation & Development

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/shedowe19/shieldpm-landing.git
    cd shieldpm-landing
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Start development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```
    *Note: The build script automatically copies `index.html` to `404.html` to support SPA routing on GitHub Pages.*

5.  **Deploy to GitHub Pages**:
    ```bash
    npm run deploy
    ```
    *This command builds the project and pushes the `dist` folder to the `gh-pages` branch.*

## 📄 License

This project is licensed under the MIT License.
