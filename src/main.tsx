import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS
AOS.init({
  duration: 700,
  easing: 'ease-out',
  once: true,
  offset: 80,
  delay: 0,
  // Disable heavy scroll animations on phones and when reduced motion is preferred
  disable: () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.innerWidth < 768,
})

createRoot(document.getElementById("root")!).render(<App />);
