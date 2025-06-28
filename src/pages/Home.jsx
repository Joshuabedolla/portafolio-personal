import { motion } from "framer-motion";
import Banner from "../components/Banner";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container py-5"
    >
      <Banner /> {/* 🔽 Mostrar Banner arriba */}

      <Skills /> {/* 🔽 Mostrar habilidades debajo */}

      <div className="d-flex justify-content-center align-items-center mt-4">
        <img
          src="src/assets/Untitled.svg"
          alt="Ilustración de bienvenida"
          className="img-fluid"
          style={{ maxHeight: '350px' }}
        />
      </div>

      <footer style={{
        backgroundColor: "#111",
        color: "white",
        padding: "1rem",
        textAlign: "center",
        marginTop: "2rem"
      }}>
        <p>&copy; 2025 Joshua Zaquiel Morales Bedolla. Todos los derechos reservados.</p>
      </footer>
    </motion.div>
  );
}
