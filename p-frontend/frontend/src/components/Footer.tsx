import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Link to="/" className="flex flex-col leading-tight">
                <span className="text-amber-400 font-bold text-xl tracking-wide">PIRAKA</span>
                <span className="text-stone-500 text-xs tracking-widest uppercase">
                  Trading Company
                </span>
              </Link>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed">
              Sikar's trusted dealer in pipes, sanitaryware, bathroom fittings, and hardware since
              1984.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-stone-300 font-semibold text-sm mb-4 tracking-wide uppercase">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Products', '/products'],
                ['Contact', '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-stone-500 hover:text-amber-400 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-stone-300 font-semibold text-sm mb-4 tracking-wide uppercase">
              Contact 
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-stone-500 text-sm">
                  Piraka Trading Company, Piraka Tower, Tabela Market, Tabela Road, Sikar, Rajasthan
                </span>
              </div>
              <a
                href="tel:+919414315640"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone size={15} className="text-amber-500" />
                <span className="text-sm">+91 94143 15640</span>
              </a>
              <a
                href="https://wa.me/919414315640"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <MessageCircle size={15} className="text-amber-500" />
                <span className="text-sm">WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-stone-600 text-xs">
            &copy; {new Date().getFullYear()} Piraka Trading Company. All rights reserved.
          </p>
          <p className="text-stone-700 text-xs">Est. 1984 · Sikar, Rajasthan</p>
        </div>
      </div>
    </footer>
  );
}
