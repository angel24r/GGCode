// src/components/Portfolio.jsx
import demoCafe from "../assets/demo-cafe.png";
import demoAbogados from "../assets/demo-abogados.png";
import demoBoutique from "../assets/demo-boutique.png";

const projects = [
  { title: "Café Aroma", image: demoCafe },
  { title: "Abogados MX", image: demoAbogados },
  { title: "Boutique Express", image: demoBoutique },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-white" id="portafolio">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Nuestro Portafolio
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
               data-aos="zoom-in-up"
               data-aos-delay={idx * 100}
                data-aos-duration="800"
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}