import { Link } from "react-router-dom";

import {
  useContext,
  useState
} from "react";

import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun
} from "react-icons/fa";

import {
  CartContext
} from "../context/CartContext";

import {
  ThemeContext
} from "../context/ThemeContext";

export default function Navbar() {

  const { cart } = useContext(CartContext);

  const {
    darkMode,
    toggleTheme
  } = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="
      sticky
      top-0
      z-50
      backdrop-blur-lg
      bg-white/70
      dark:bg-gray-900/70
      border-b
      border-white/20
      shadow-lg
    ">

      <div className="
        flex
        justify-between
        items-center
        px-6
        md:px-12
        lg:px-16
        py-4
      ">

    
        <h1 className="
          text-2xl
          md:text-3xl
          font-bold
          text-gray-800
          dark:text-white
        ">
            🍔 ChavelitasFood Delivery
        </h1>

<div className="
  hidden
  md:flex
  items-center
  gap-8
  text-lg
">

  <Link
    to="/"
    className="
      text-gray-800
      dark:text-white
      hover:text-blue-500
      transition
    "
  >
    Inicio
  </Link>

  <Link
    to="/admin-login"
    className="
      text-gray-800
      dark:text-white
      hover:text-blue-500
      transition
    "
  >
    Admin
  </Link>

  <Link
    to="/cart"
    className="
      flex
      items-center
      gap-2
      text-gray-800
      dark:text-white
      hover:text-blue-500
      transition
    "
  >

    <FaShoppingCart />

    {cart.length}

  </Link>

  <button
    onClick={toggleTheme}
    className="
      text-xl
      text-gray-800
      dark:text-yellow-300
      hover:scale-110
      transition
    "
  >

    {
      darkMode
        ? <FaSun />
        : <FaMoon />
    }

  </button>

</div>

        <div className="
          flex
          items-center
          gap-4
          md:hidden
        ">

          <button
            onClick={toggleTheme}
            className="
              text-xl
              text-gray-800
              dark:text-yellow-300
            "
          >

            {
              darkMode
                ? <FaSun />
                : <FaMoon />
            }

          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              text-2xl
              text-gray-800
              dark:text-white
            "
          >

            {
              menuOpen
                ? <FaTimes />
                : <FaBars />
            }

          </button>

        </div>

      </div>

      {
        menuOpen && (

          <div className="
            md:hidden
            flex
            flex-col
            gap-4
            px-4
            py-4
            bg-white
            dark:bg-gray-900
            border-t
          ">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="
                text-gray-800
                dark:text-white
              "
            >
              Inicio
            </Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="
                flex
                items-center
                gap-2
                text-gray-800
                dark:text-white
              "
            >

              <FaShoppingCart />

              {cart.length}

            </Link>

          </div>

        )
      }

    </nav>

  );
}