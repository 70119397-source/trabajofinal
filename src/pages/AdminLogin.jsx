import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      username === "admin" &&
      password === "1234"
    ) {

      localStorage.setItem(
        "adminAuth",
        "true"
      );

      navigate("/admin");

    } else {

      alert("Credenciales incorrectas");

    }

  };

  return (

    <div className="
      min-h-screen
      flex
      justify-center
      items-center
      bg-gray-100
      dark:bg-gray-950
      p-6
    ">

      <form
        onSubmit={handleLogin}
        className="
          bg-white
          dark:bg-gray-900
          p-10
          rounded-3xl
          shadow-2xl
          w-full
          max-w-md
        "
      >

        <h1 className="
          text-4xl
          font-bold
          mb-8
          text-center
          dark:text-white
        ">
          Administrador
        </h1>

        <div className="mb-5">

          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            className="
              w-full
              p-4
              rounded-xl
              border
            "
          />

        </div>

        <div className="mb-8">

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              w-full
              p-4
              rounded-xl
              border
            "
          />

        </div>

        <button
          className="
            w-full
            bg-blue-500
            hover:bg-blue-700
            text-white
            py-4
            rounded-xl
            font-bold
            transition
          "
        >
          Ingresar
        </button>

      </form>

    </div>

  );
}