import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${form.nombre}, tu mensaje fue enviado.`);
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="container py-5"
    >
      <h2 className="mb-4 text-center fw-bold display-5">✉️ Contacto</h2>

      <div className="mb-4 text-center">
        <p><strong>Correo:</strong> moralesbedollajoshuazaquiel@gmail.com</p>
        <p><strong>Teléfono:</strong> 2213564142</p>
        <div className="d-flex justify-content-center gap-3 fs-4">
          <a
            href="https://facebook.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-primary"
          >
            <i className="bi bi-facebook"></i> Facebook
          </a>
          <a
            href="https://instagram.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-danger"
          >
            <i className="bi bi-instagram"></i> Instagram
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            className="form-control"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Enviar mensaje
        </button>
      </form>
    </motion.div>
  );
}
