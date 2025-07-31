import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/GG-Code-logo.png";

const navLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "portafolio", label: "Portafolio" },
  { id: "testimonios", label: "Testimonios" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="w-full px-10 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div
            className="flex items-center cursor-pointer"
            onClick={() => handleClick("inicio")}
        >
        <img
            src={Logo}
            alt="GG Code Logo"
            className={`object-contain transition-all duration-300 ${
              scrolled ? "h-8 w-15" : "h-12 w-20"
            }`}
        />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`transition ${
                active === link.id ? "text-blue-600 font-semibold" : "text-gray-700"
              } hover:text-blue-600`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contacto"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Cotiza ahora
          </a>
        </nav>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-6 pb-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`block w-full text-left ${
                  active === link.id ? "text-blue-600 font-semibold" : "text-gray-700"
                } hover:text-blue-600 transition`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="#contacto"
              className="block w-full text-center bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Cotiza ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
