import { motion } from 'framer-motion';

const apps = [
  { nombre: 'Adobe Photoshop', img: '/Imagenes/images.png' },
  { nombre: 'FL Studio', img: '/Imagenes/png-transparent-fl-studio-digital-audio-workstation-line-ableton-live-others-miscellaneous-natural-foods-food-thumbnail.png' },
  { nombre: 'Visual Studio Code', img: '/Imagenes/58482afbcef1014c0b5e4a21.png' },
  { nombre: 'Visual Studio', img: '/Imagenes/Visual-Studio-Logo.png' },
  { nombre: 'Filmora Wondershare', img: '/Imagenes/250-2508717_wondershare-filmora-wondershare-filmora-logo-png.png' },
  { nombre: 'Adobe Animate', img: '/Imagenes/adobe-animate_5968435.png' },
  { nombre: 'MySQL', img: '/Imagenes/mysql-icon.png' },
];

export default function AplicacionesFavoritas() {
  return (
    <motion.div
      className="container my-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-4">📱 Aplicaciones que más me gusta usar</h2>
      <p>Las aplicaciones que más me gusta usar son las siguientes:</p>

      <div className="row">
        {apps.map((app, idx) => (
          <motion.div
            key={idx}
            className="col-6 col-md-3 text-center mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={app.img} alt={app.nombre} className="img-fluid mb-2" style={{ height: '80px' }} />
            <p>{app.nombre}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

