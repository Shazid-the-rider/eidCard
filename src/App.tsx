import { useEffect } from 'react'
import './App.css'
import HomePage from './screen/HomePage'

function App() {
  // globally calculate --vh to avoid broken layouts in mobile in‑app browsers
  useEffect(() => {
    const setRealHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setRealHeight();
    window.addEventListener('resize', setRealHeight);
    return () => window.removeEventListener('resize', setRealHeight);
  }, []);

  return (
    <>
      <HomePage />
    </>
  );
}

export default App
