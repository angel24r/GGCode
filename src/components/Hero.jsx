import DeveloperImage from "../assets/developer-ggcode.svg";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white min-h-[70vh] pt-12 md:pt-40 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
            Soluciones modernas a tu medida
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Impulsamos tu presencia digital
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            con tecnología moderna
          </p>
          <a
            href="#contacto"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Solicitar Cotización
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src={DeveloperImage}
            alt="Ilustración de desarrollo"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
