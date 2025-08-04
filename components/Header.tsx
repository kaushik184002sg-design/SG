import React, { useState, useEffect } from 'react';
import { SystemsGroupLogo } from './icons/SystemsGroupLogo';
import { MenuIcon } from './icons/MenuIcon';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

const NavLink: React.FC<{ href: string; children: React.ReactNode, onClick?: () => void }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="text-sm font-medium text-[var(--text-main)] hover:opacity-75 transition-opacity py-2 block">
    {children}
  </a>
);

interface HeaderProps {
    isLoaded: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoaded }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === 'light') {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`relative flex items-center justify-between p-4 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-bg)] backdrop-blur-lg shadow-lg transition-all duration-[2000ms] ease-in-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      <a href="/" className="flex items-center gap-3">
          <SystemsGroupLogo className="h-8 w-8" />
          <span className="text-xl font-semibold tracking-tighter text-[var(--text-heading)]">SystemsGroup</span>
      </a>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6">
          <NavLink href="#company">Company</NavLink>
          <NavLink href="#impact">Impact</NavLink>
          <NavLink href="#products">Products & Technology</NavLink>
          <NavLink href="#team">Team</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#investors">Investors</NavLink>
      </nav>
      <div className="hidden lg:flex items-center gap-4"> {/* Group contact and theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-[var(--glass-bg)] text-[var(--text-main)] hover:bg-[var(--glass-bg)]/50 transition-colors flex items-center justify-center"
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
        </button>
        <a
          href="#contact"
          className="text-sm font-medium px-5 py-2.5 rounded-lg bg-[var(--text-main)] text-[var(--bg-main)] hover:opacity-90 transition-opacity"
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center gap-2 z-50"> {/* Group mobile menu button and theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-[var(--glass-bg)] text-[var(--text-main)] hover:bg-[var(--glass-bg)]/50 transition-colors flex items-center justify-center"
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
        </button>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <MenuIcon isOpen={isMenuOpen} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 mt-[2px] transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="p-6 rounded-b-2xl bg-[var(--bg-main)]/80 border border-[var(--glass-bg)] backdrop-blur-xl flex flex-col items-center gap-2">
            <NavLink href="#company" onClick={closeMenu}>Company</NavLink>
            <NavLink href="#impact" onClick={closeMenu}>Impact</NavLink>
            <NavLink href="#products" onClick={closeMenu}>Products & Technology</NavLink>
            <NavLink href="#team" onClick={closeMenu}>Team</NavLink>
            <NavLink href="#services" onClick={closeMenu}>Services</NavLink>
            <NavLink href="#investors" onClick={closeMenu}>Investors</NavLink>
            <button
              onClick={toggleTheme}
              className="mt-4 w-full text-center text-sm font-medium px-5 py-2.5 rounded-lg bg-[var(--glass-bg)] text-[var(--text-main)] hover:bg-[var(--glass-bg)]/50 transition-colors flex items-center justify-center gap-2"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
              <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
            <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 w-full text-center text-sm font-medium px-5 py-2.5 rounded-lg bg-[var(--text-main)] text-[var(--bg-main)] hover:opacity-90 transition-opacity"
            >
                Contact
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
