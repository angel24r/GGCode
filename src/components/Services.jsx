const services = [
  {
    title: "Landing Pages",
    description: "Sitios de una sola página optimizados para captar clientes de forma efectiva.",
    icon: "🖥️",
  },
  {
    title: "Sitios a Medida",
    description: "Desarrollamos plataformas únicas adaptadas a tus necesidades y objetivos.",
    icon: "🛠️",
  },
  {
    title: "Modernización de Sitios",
    description: "Actualizamos tu sitio web para hacerlo rápido, seguro y atractivo.",
    icon: "⚡",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
        <p className="text-gray-600 mb-12">
          Soluciones digitales para hacer crecer tu presencia en línea.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
