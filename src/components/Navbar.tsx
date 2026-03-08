import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-background border-b border-primary/20 transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_12px_-2px_hsl(207_58%_23%/0.15)]' : ''
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" className="flex items-center" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          <img
            src="/shoppalyzer_2.png"
            alt="Shoppalyzer"
            className="h-8 md:h-10 w-auto"
          />
        </a>
        <Button
          variant="cta"
          size="sm"
          onClick={() => navigate('/')}
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};
