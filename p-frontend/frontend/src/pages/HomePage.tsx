import { Phone, MessageCircle, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgImage from '../all-images/bgimage.png'

const highlights = [
  { label: 'Sanitary Ware', desc: 'Jal, Lipka & more' },
  { label: 'Steel & PVC Pipes', desc: 'All sizes & grades' },
  { label: 'Bathroom Fittings', desc: 'Taps, showers, mixers' },
  { label: 'Fittings & Hardware', desc: 'Joints, clamps, bolts' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `url(${bgImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950/90 via-stone-900/80 to-stone-800/70" />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500 to-transparent opacity-60" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4">
            Est. 1984 · Sikar, Rajasthan
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Piraka Trading
            <span className="block text-amber-400">Company</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Sikar's leading destination for pipes, sanitary ware, fittings, and bathroom
            accessories. Serving homes and businesses for over 40 years.
          </p>
          <div className="flex items-center justify-center gap-2 text-stone-400 text-sm mb-10">
            <MapPin size={15} className="text-amber-400" />
            <span>Piraka Trading Company, Piraka Tower, Tabela Market, Tabela Road, Sikar</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919414315640"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-8 py-3 rounded transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href="https://wa.me/919414315640"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Product highlights */}
      <section className="bg-stone-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Product Highlights</h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 hover:border-amber-500/40 transition-all duration-300 group"
              >
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-amber-400 transition-colors">
                  {item.label}
                </h3>
                <p className="text-stone-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors"
            >
              View All Products <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Map preview */}
      <section className="bg-stone-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase font-medium mb-2">
              Find Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Visit Our Store</h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto" />
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg border border-stone-200">
            <iframe
              title="Piraka Trading Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.402829957997!2d75.1425649!3d27.612038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca4c628a11ac3%3A0xa1af7ed51b42c774!2sPiraka%20Trading%20Company!5e0!3m2!1sen!2sin!4v1778737305502!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex items-center justify-center gap-2 text-stone-500 text-sm mt-6">
            <MapPin size={15} className="text-amber-500" />
            <span>Piraka Trading Company, Piraka Tower, Tabela Market, Tabela Road, Sikar, Rajasthan</span>
          </div>
        </div>
      </section>
    </>
  );
}
