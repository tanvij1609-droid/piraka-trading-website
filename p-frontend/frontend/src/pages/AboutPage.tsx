import { ShieldCheck, Users, Clock, Star, Award, Handshake } from 'lucide-react';
import bgAbout from '../all-images/bgaboutus.png'

import A1 from '../all-images/aboutus-1.png'
import A2 from '../all-images/aboutus-2.png'
import A3 from '../all-images/aboutus-3.png'
import A4 from '../all-images/aboutus-4.png'

const stats = [
  { icon: Clock, value: '40+', label: 'Years of Experience' },
  { icon: Users, value: 'Thousands', label: 'Satisfied Customers' },
  { icon: ShieldCheck, value: 'Trusted', label: 'Quality Products' },
  { icon: Star, value: 'Top-Rated', label: 'Dealer in Sikar' },
];

const brands = [
  { name: 'Weldrite', desc: 'Solvent Cement' },
  { name: 'Jal', desc: 'Premium bath fittings, faucets & designer taps' },
  { name: 'Sintex', desc: 'Reliable water tanks, pipe fittings & storage solutions' },
  { name: 'UCO', desc: 'Dependable GI pipe fittings & industrial brass valves' },
  { name: 'Tata', desc: 'Steel pipes & structural products' },
  { name: 'Lipka', desc: 'Luxury floor drains, kitchen sinks & bathroom accessories' },
  { name: 'Prakash Surya', desc: 'GI pipes & fittings' },
  { name: 'Prince', desc: 'PVC Pipes, fittings & plumbing solutions' },
];

const storeImages = [
  {
    src: A1,
    alt: 'Store interior with product displays',
  },
  {
    src: A2,
    alt: 'Wide range of plumbing products',
  },
  {
    src: A3,
    alt: 'Hardware and fittings section',
  },
  {
    src: A4,
    alt: 'Pipe and fitting inventory',
  },
];

const values = [
  {
    icon: Award,
    title: 'Quality Assurance',
    desc: 'We only stock products from certified, industry-leading brands.',
  },
  {
    icon: Handshake,
    title: 'Customer First',
    desc: 'Every customer receives personalized attention and expert guidance.',
  },
  {
    icon: ShieldCheck,
    title: 'Fair Pricing',
    desc: 'Competitive rates for both retail and wholesale customers.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `url(${bgAbout})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 to-stone-900/80" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-stone-300 text-lg max-w-2xl leading-relaxed">
            Four decades of trust, quality, and service in Sikar's hardware and plumbing industry.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-stone-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-stone-800 mb-6 leading-snug">
              Sikar's Trusted Hardware & Plumbing Partner Since 1984
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Established in 1984, Piraka Trading Company has grown into one of Sikar's most
              respected names in pipes, sanitary ware, and bathroom fittings. Located in the heart of
              Tabela Market on Tabela Road, we have been serving homeowners, contractors, and
              businesses for over four decades.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The belief that customer satisfaction is as important as the products we sell has helped
              us garner a vast and growing base of loyal customers. Our staff are courteous, prompt,
              and always ready to answer any questions you may have.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We operate both retail and wholesale, offering a comprehensive range of products
              including PVC pipes, steel pipes, sanitaryware, bathroom fittings, and
              general hardware. Whether you are building a new home or renovating, we have everything
              you need under one roof.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-xl shadow-md">
              <img
                src={storeImages[0].src}
                alt={storeImages[0].alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={storeImages[1].src}
                alt={storeImages[1].alt}
                className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={storeImages[2].src}
                alt={storeImages[2].alt}
                className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-stone-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon size={28} className="text-amber-400 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white mb-1">{value}</p>
              <p className="text-stone-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase font-medium mb-2">
              Trusted Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Brands We Deal In
            </h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="border border-stone-200 rounded-xl p-6 text-center hover:border-amber-400 hover:shadow-md transition-all duration-300"
              >
                <p className="text-2xl font-bold text-amber-600 mb-2">{brand.name}</p>
                <p className="text-stone-500 text-sm">{brand.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase font-medium mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Our Values</h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-800 mb-2">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More store images */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase font-medium mb-2">
              Our Store
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Inside Piraka Trading</h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {storeImages.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
