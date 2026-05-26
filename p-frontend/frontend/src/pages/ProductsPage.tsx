import { useState } from 'react';
import { Link } from 'react-router-dom';
import bgProduct from '../all-images/bgproduct.png'

const categories = [
  {
    id: 'sanitary',
    label: 'Sanitary Ware',
    description:
      "Premium, high-grade sanitaryware sourced from India's leading trusted brands. We stock wash basins, wall-mounted and floor-mounted toilets, urinals, and complete bathroom suites. Whether you need a single unit or bulk supply for a project, we have you covered.",
    items: ['Wash Basins', 'Wall-Mounted Toilets', 'Floor-Mounted Toilets', 'Urinals', 'Bathroom Suites', 'Concealed Cisterns'],
    images: [
      '/src/all-images/sanitaryware-1.webp',
      '/src/all-images/sanitaryware-2.jpg',
      '/src/all-images/sanitaryware-3.jpg',
      '/src/all-images/sanitaryware-4.jpg',
      '/src/all-images/sanitaryware-5.jpg',
    ],
  },
  {
    id: 'pipes',
    label: 'Pipes',
    description:
      'Steel pipes, GI pipes, PVC pipes, and CPVC pipes in all sizes and pressure ratings. We are one of the leading pipe dealers in Sikar, serving both residential and commercial construction needs. Available in retail and wholesale quantities.',
    items: ['Steel Pipes', 'GI Pipes', 'PVC Pipes', 'CPVC Pipes', 'SWR Pipes', 'Agricultural Pipes'],
    images: [
      '/src/all-images/pipe-1.jpg',
      '/src/all-images/pipe-2.jpg',
      '/src/all-images/pipe-3.jpg',
      '/src/all-images/pipe-4.png',
    ],
  },
  {
    id: 'fittings',
    label: 'Fittings',
    description:
      'A complete range of pipe fittings including elbow joints, tee fittings, couplings, reducers, unions, and flanges. Compatible with all pipe types we carry. Both threaded and push-fit options available.',
    items: ['Elbow Joints', 'Tee Fittings', 'Couplings', 'GI Pipe Fittings', 'Unions', 'PVC Pipe Fittings'],
    images: [
      '/src/all-images/fitting-4.png',
      '/src/all-images/fitting-2.jpg',
      '/src/all-images/fitting-3.png',
      '/src/all-images/fitting-1.jpg',
    ],
  },
  {
    id: 'bathroom',
    label: 'Bathroom Accessories',
    description:
      'Everything you need to complete your bathroom — showers, taps, mixers, towel rods, soap dishes, mirrors, and more. Modern designs that combine style with durability.',
    items: ['Showers & Hand Showers', 'Taps & Mixers', 'Towel Rods & Rings', 'Soap Dishes', 'Mirrors', 'Shower Panels'],
    images: [
      '/src/all-images/bathroom-2.webp',
      '/src/all-images/bathroom-1.webp',
      '/src/all-images/bathroom-3.jpg',
      '/src/all-images/bathroom-4.jpg',
      '/src/all-images/bathroom-5.jpg',
    ],
  },
  {
    id: 'hardware',
    label: 'Hardware',
    description:
      'General construction and plumbing hardware including hinges, clamps, wall anchors, and miscellaneous items. Essential supplies for any building or renovation project.',
    items: ['Pipe Clamps', 'Wall Anchors', 'Hinges & Latches'],
    images: [
      '/src/all-images/hardware-1.webp',
      '/src/all-images/hardware-2.jpg',
    ],
  },
  {
    id: 'tanks',
    label: 'Water Tanks',
    description:
      "Premium, heavy-duty water storage solutions sourced directly from India's leading trusted brands. We stock multi-layer overhead tanks, compact indoor loft tanks, underground sumps, and high-capacity commercial storage. Whether you need a single unit for your home or bulk supply for a commercial project, we have you covered.",
    items: ['Water Tanks'],
    images: [
      '/src/all-images/tank-1.jpg',
      '/src/all-images/tank-2.jpg',
      '/src/all-images/tank-3.jpg',
    ],
  },
];

export default function ProductsPage() {
  const [active, setActive] = useState('sanitary');
  const current = categories.find((c) => c.id === active)!;

  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `url(${bgProduct})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 to-stone-900/80" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-3">Our Range</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Products</h1>
          <p className="text-stone-300 text-lg max-w-2xl leading-relaxed">
            From pipes to premium sanitaryware, we stock everything you need for plumbing,
            construction, and renovation.
          </p>
        </div>
      </section>

      {/* Category navigation */}
      <section className="bg-stone-900 py-6 px-6 sticky top-16 z-40 border-b border-stone-700">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                active === cat.id
                  ? 'bg-amber-500 text-stone-900'
                  : 'border border-stone-600 text-stone-400 hover:border-amber-500 hover:text-amber-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Active category detail */}
      <section className="bg-stone-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">{current.label}</h2>
            <p className="text-stone-600 max-w-3xl leading-relaxed">{current.description}</p>
          </div>

          {/* Items list */}
          <div className="flex flex-wrap gap-3 mb-10">
            {current.items.map((item) => (
              <span
                key={item}
                className="bg-white border border-stone-200 text-stone-700 text-sm font-medium px-4 py-2 rounded-full hover:border-amber-400 hover:text-amber-700 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Image gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {current.images.map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-xl shadow-md ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              >
                <img
                  src={src}
                  alt={`${current.label} ${i + 1}`}
                  className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                    i === 0 ? 'h-full min-h-[280px]' : 'h-50'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Inquire About {current.label}
            </Link>
          </div>
        </div>
      </section>

      {/* All categories overview */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase font-medium mb-2">
              Full Range
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Browse All Categories
            </h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActive(cat.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left border border-stone-200 rounded-xl overflow-hidden hover:border-amber-400 hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={cat.images[0]}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-amber-600 transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-stone-500 text-sm line-clamp-2">{cat.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
