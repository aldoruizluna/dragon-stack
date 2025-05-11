# DRAGON Stack v10/10 - Documentation

## Overview
DRAGON Stack is a comprehensive modern cloud architecture framework designed for building scalable, resilient, and maintainable cloud-native applications. The architecture is organized into six distinct tiers, each serving a specific purpose in the cloud ecosystem.

## Architecture Tiers

### T-0: Drive Core
**Physical & Network Layer**
- Bare metal infrastructure
- Network architecture
- Hardware resources

### T-1: Reactor
**Kubernetes Fabric & Core Services**
- Container orchestration
- Service mesh
- Infrastructure automation

### T-2: Ark
**Data & Event Layer**
- Data storage solutions
- Event streaming
- Data processing

### T-3: Gateway
**Domain Apps & Services**
- Business applications
- API management
- Domain-specific services

### T-4: Oracle
**Enablement, Observability, Ops**
- Monitoring & logging
- CI/CD pipelines
- Security & compliance

### T-5: Nexus
**Platform Services**
- Cross-cutting concerns
- Shared services
- Platform tooling

## Getting Started

### Prerequisites
- Node.js 16+ and npm 8+
- Modern web browser

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/aldoruizluna/dragon-stack.git
   cd dragon-stack
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## Project Structure
```
dragon-stack/
├── public/                 # Static files
│   ├── logo.svg            # Application logo
│   └── sw.js               # Service Worker
├── src/
│   ├── assets/             # Static assets
│   ├── components/          # Reusable components
│   ├── config/             # Configuration files
│   ├── scripts/            # JavaScript files
│   │   └── main.js         # Main application script
│   ├── styles/             # CSS/Styles
│   │   └── main.css        # Main stylesheet
│   └── index.html          # Main HTML file
├── .gitignore              # Git ignore file
├── package.json            # Project configuration
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
└── vite.config.js          # Vite config
```

## Features

### Theme Support
- Light and dark mode
- Persistent theme preference
- Smooth transitions

### Internationalization
- English and Spanish support
- Easy to add more languages
- Language preference persistence

### Performance
- Code splitting
- Lazy loading
- Service Worker for offline support
- Optimized assets

### Development
- Hot Module Replacement (HMR)
- Source maps
- Linting
- TypeScript support (optional)

## Deployment

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Contributing
Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) for details.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
- GitHub: [@aldoruizluna](https://github.com/aldoruizluna)
- Project Link: [https://github.com/aldoruizluna/dragon-stack](https://github.com/aldoruizluna/dragon-stack)
