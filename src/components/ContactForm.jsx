import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_0antg9i",
        "template_6j2nuut",
        form,
        "4EUPr1Spa3rjB7mie"
      );

      alert("¡Mensaje enviado con éxito!");
      setForm({ from_name: "", from_email: "", service: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Ocurrió un error. Intenta más tarde.");
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
        <p className="text-gray-600 mb-10">Completa el formulario y te responderemos pronto.</p>

        <form onSubmit={handleSubmit} className="grid gap-6 text-left">
          <input
            name="from_name"
            value={form.from_name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            className="w-full border p-3 rounded-xl"
          />
          <input
            name="from_email"
            type="email"
            value={form.from_email}
            onChange={handleChange}
            placeholder="Tu correo"
            required
            className="w-full border p-3 rounded-xl"
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-xl"
          >
            <option value="">Selecciona un servicio</option>
            <option value="landing">Landing Page</option>
            <option value="sitio">Sitio a medida</option>
            <option value="actualizacion">Actualización de sitio</option>
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tu mensaje"
            rows="4"
            required
            className="w-full border p-3 rounded-xl"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
