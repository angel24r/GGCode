import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
      <div className="mt-3 flex justify-center space-x-4 text-xl pb-2">
        <a
          href="https://www.facebook.com/ggcode.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600"
        >
          <FaWhatsapp />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} GG Code. Todos los derechos reservados.</p>
      <p className="mt-1">Ubicados en Celaya, Guanajuato, México 🇲🇽</p>

    </footer>
  );
}
