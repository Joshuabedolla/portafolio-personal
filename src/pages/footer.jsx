export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Joshua Zaquiel. Todos los derechos reservados.</p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#sobremi" className="hover:text-indigo-400 transition duration-300">Sobre mí</a>
          <a href="#proyectos" className="hover:text-indigo-400 transition duration-300">Proyectos</a>
          <a href="#contacto" className="hover:text-indigo-400 transition duration-300">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
