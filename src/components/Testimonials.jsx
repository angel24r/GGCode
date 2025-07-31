// src/components/Testimonials.jsx
import Ana from "../assets/ana.png";
import Carlos from "../assets/carlos.png";

const testimonials = [
  {
    name: "Ana",
    role: "Dueña de Café Aroma",
    quote: "Gracias a GG Code mi negocio ahora tiene presencia en línea.",
    image: Ana,
  },
  {
    name: "Carlos",
    role: "Socio en Abogados MX",
    quote: "Nos ayudaron a modernizar nuestra imagen digital.",
    image: Carlos,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-blue-50" id="testimonios">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Testimonios
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, idx) => (
            <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                data-aos-duration="800"
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
            <div className="flex items-center gap-4 mb-4">
                <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                <p className="text-gray-800 font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
                </div>
            </div>
            <p className="text-gray-600 italic leading-relaxed">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
