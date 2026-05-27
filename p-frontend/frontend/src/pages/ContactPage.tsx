import { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import axios from 'axios';

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const initial: FormState = { name: '', phone: '', email: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/inquiry`, {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });

    setSuccess(true);
    setForm(initial);

    } catch (error) {
      setError("Something went wrong. Please try again.");
    }

   setSubmitting(false);
  };

  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/6489101/pexels-photo-6489101.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 to-stone-900/80" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-stone-300 text-lg max-w-2xl leading-relaxed">
            Have a question or need a quote? Reach out to us — we are happy to help.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-stone-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Info column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-stone-800 mb-1">Address</p>
                <p className="text-stone-600 leading-relaxed">
                  Piraka Trading Company, Piraka Tower,<br />
                  Tabela Market, Tabela Road,<br />
                  Sikar, Rajasthan
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-stone-800 mb-1">Phone</p>
                <a
                  href="tel:+919414315640"
                  className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  +91 94143 15640
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle size={22} className="text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-stone-800 mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/919414315640"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-stone-800 mb-1">Business Hours</p>
                <p className="text-stone-600">Monday – Saturday</p>
                <p className="text-stone-600">9:30 AM – 8:00 PM</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md border border-stone-200 flex-1 min-h-64">
              <iframe
                title="Piraka Trading Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.402829957997!2d75.1425649!3d27.612038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca4c628a11ac3%3A0xa1af7ed51b42c774!2sPiraka%20Trading%20Company!5e0!3m2!1sen!2sin!4v1778737305502!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '260px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
            {success ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle size={52} className="text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-stone-800 mb-2">Inquiry Sent!</h3>
                <p className="text-stone-500 mb-6">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-amber-600 hover:text-amber-700 font-medium text-sm underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-stone-800 mb-6">Send an Inquiry</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-stone-600 text-sm font-medium mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-600 text-sm font-medium mb-1.5">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-600 text-sm font-medium mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com (optional)"
                      className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-600 text-sm font-medium mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what you are looking for — product name, quantity, any specifications..."
                      className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition resize-none"
                    />
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 text-stone-900 font-semibold py-3 rounded-lg transition-colors duration-200 mt-2"
                  >
                    <Send size={16} />
                    {submitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
