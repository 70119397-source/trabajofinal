import {
  useContext,
  useEffect
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  OrdersContext
} from "../context/OrdersContext";

export default function AdminPanel() {

  const navigate = useNavigate();

  const { orders } = useContext(OrdersContext);

  useEffect(() => {

    const auth = localStorage.getItem("adminAuth");

    if (!auth) {

      navigate("/admin-login");

    }

  }, []);

  const totalSales = orders.reduce(

    (acc, order) => acc + order.total,

    0

  );

  return (

    <div className="
      min-h-screen
      bg-gray-100
      dark:bg-gray-950
      p-8
    ">

      <div className="
        flex
        justify-between
        items-center
        mb-10
      ">

        <h1 className="
          text-4xl
          font-bold
          dark:text-white
        ">
          Panel Admin
        </h1>

        <button
          onClick={() => {

            localStorage.removeItem(
              "adminAuth"
            );

            navigate("/");

          }}
          className="
            bg-red-500
            hover:bg-red-700
            text-white
            px-5
            py-3
            rounded-xl
          "
        >
          Cerrar sesión
        </button>

      </div>

      <div className="
        grid
        md:grid-cols-3
        gap-6
        mb-10
      ">

        <div className="
          bg-white
          dark:bg-gray-900
          p-6
          rounded-3xl
          shadow-lg
        ">

          <h2 className="
            text-gray-500
            mb-2
          ">
            Pedidos
          </h2>

          <p className="
            text-4xl
            font-bold
            dark:text-white
          ">
            {orders.length}
          </p>

        </div>

        <div className="
          bg-white
          dark:bg-gray-900
          p-6
          rounded-3xl
          shadow-lg
        ">

          <h2 className="
            text-gray-500
            mb-2
          ">
            Ventas Totales
          </h2>

          <p className="
            text-4xl
            font-bold
            dark:text-white
          ">
            S/ {totalSales.toFixed(2)}
          </p>

        </div>

      </div>

      <div className="
        bg-white
        dark:bg-gray-900
        rounded-3xl
        overflow-hidden
        shadow-lg
      ">

        <table className="w-full">

          <thead className="
            bg-blue-500
            text-white
          ">

            <tr>

              <th className="p-4 text-left">
                Cliente
              </th>

              <th className="p-4 text-left">
                Total
              </th>

              <th className="p-4 text-left">
                Hora
              </th>

            </tr>

          </thead>

          <tbody>

            {
              orders.map((order, index) => (

                <tr
                  key={index}
                  className="
                    border-b
                    dark:border-gray-700
                  "
                >

                  <td className="
                    p-4
                    dark:text-white
                  ">
                    {order.customer}
                  </td>

                  <td className="
                    p-4
                    dark:text-white
                  ">
                    S/ {order.total}
                  </td>

                  <td className="
                    p-4
                    dark:text-white
                  ">
                    {order.date}
                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>

  );
}