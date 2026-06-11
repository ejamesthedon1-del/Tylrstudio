import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Services', target: 'services' },
  { label: 'Contact', target: 'contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-lg tracking-tight transition-colors ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Tyler Taylor Studio
          </button>

          <nav className="flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => scrollTo(item.target)}
                className={`text-sm transition-colors ${
                  scrolled
                    ? 'text-gray-600 hover:text-black'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
