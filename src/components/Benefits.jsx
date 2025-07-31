const benefits = [
  {
    title: "Tecnologías Modernas",
    description: "Usamos herramientas actuales como React, Laravel, FastAPI, etc. Para construir soluciones rápidas y escalables.",
    icon: "🚀",
  },
  {
    title: "Diseño Responsivo",
    description: "Tu sitio se verá increíble en cualquier dispositivo: móvil, tablet o computadora.",
    icon: "📱",
  },
  {
    title: "Soporte Personalizado",
    description: "Te acompañamos durante y después del desarrollo para asegurar el éxito de tu proyecto.",
    icon: "🤝",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-blue-50 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
        <p className="text-gray-700 mb-12">
          Somos tu aliado tecnológico para alcanzar tus metas digitales.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
