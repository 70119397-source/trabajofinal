import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-bottom border-gray-700 pb-10">
          
          <div className="space-y-4">
            <h2 className="text-white text-2xl font-bold flex items-center gap-2">
              🍔 ChavelitasFood
            </h2>
            <p className="text-sm leading-relaxed">
              Llevando el mejor sabor de la cocina local directamente a tu mesa en Cusco. 
              Calidad, rapidez y tradición en cada pedido.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" /> Av. El Sol, Cusco, Perú
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500" /> +51 XXX XXX XXX
              </li>
              <li className="flex items-center gap-2">
                📧 contacto@chavelitasfood.com
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold uppercase tracking-wider">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ChavelitasFood Delivery. Desarrollado por Edson Huaman.</p>
          <p className="mt-2 italic">Cusco - Perú</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;