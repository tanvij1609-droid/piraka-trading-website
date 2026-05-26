import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../all-images/logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-900 shadow-lg' : 'bg-stone-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-tight">
          <img
            src={logo}
            alt="Piraka Trading Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-amber-400 font-bold text-xl tracking-wide">PIRAKA</span>
          <span className="text-stone-300 text-xs tracking-widest uppercase">Trading Company</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-amber-400 font-medium' : 'text-stone-300 hover:text-amber-400'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="tel:+919414315640"
            className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold text-sm px-5 py-2 rounded transition-colors duration-200"
          >
            Call Now
          </a>
        </nav>

        <button
          className="md:hidden text-stone-300 hover:text-amber-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-stone-900 border-t border-stone-700 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive ? 'text-amber-400 font-medium' : 'text-stone-300 hover:text-amber-400'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="tel:+919414315640"
            className="bg-amber-500 text-stone-900 font-semibold text-sm px-5 py-2 rounded text-center"
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}
