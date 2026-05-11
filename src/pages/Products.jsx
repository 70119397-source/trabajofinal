import {
  useEffect,
  useState,
  useContext,
  useMemo
} from "react";

import {
  useParams,
  Link
} from "react-router-dom";

import {
  motion
} from "framer-motion";

import {
  FaHeart
} from "react-icons/fa";

import {
  categoryTranslations,
  mealTranslations
} from "../data/translations";

import {
  getMealsByCategory,
  getCategories
} from "../api/mealsApi";

import {
  CartContext
} from "../context/CartContext";

import Sidebar from "../components/Sidebar";

import SearchBar from "../components/SearchBar";

export default function Products() {

  const { category } = useParams();

  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true);

    Promise.all([

      getMealsByCategory(category),

      getCategories()

    ])

    .then(([mealsData, catsData]) => {

      const mealsWithPrice = (mealsData || []).map(

        meal => ({

          ...meal,

          price: Number(

            (
              parseInt(
                meal.idMeal.slice(-2)
              ) + 20

            ).toFixed(2)

          )

        })

      );

      setProducts(mealsWithPrice);

      setCategories(catsData || []);

      setLoading(false);

    });

  }, [category]);

  const filteredProducts = useMemo(() => {

    return products.filter(prod =>

      prod.strMeal
        .toLowerCase()
        .includes(search.toLowerCase())

    );

  }, [products, search]);

  return (

    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "100vh"
      }}
      className="
        bg-gray-50
        dark:bg-gray-950
      "
    >

      <Sidebar categories={categories} />

      <main
        style={{
          flex: 1,
          paddingLeft: "60px",
          paddingRight: "60px",
          paddingTop: "60px",
          paddingBottom: "60px"
        }}
      >

        <header
          style={{
            marginBottom: "50px"
          }}
        >

          <h1
            style={{
              fontSize: "60px",
              fontWeight: "900",
              marginBottom: "10px"
            }}
            className="
              text-gray-900
              dark:text-white
              uppercase
            "
          >

            {
              categoryTranslations[category]
              || category
            }

          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#6b7280",
              marginBottom: "30px"
            }}
          >

            Explora los mejores platos disponibles

          </p>

          <div
            style={{
              maxWidth: "600px"
            }}
          >

            <SearchBar
              search={search}
              setSearch={setSearch}
            />

          </div>

        </header>

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-10
        ">

          {
            loading

            ? (

              [...Array(8)].map((_, i) => (

                <div
                  key={i}
                  className="
                    h-80
                    rounded-4xl
                    bg-gray-200
                    animate-pulse
                  "
                />

              ))

            )

            : (

              filteredProducts.map(prod => (

                <motion.div
                  key={prod.idMeal}

                  initial={{
                    opacity: 0,
                    y: 20
                  }}

                  animate={{
                    opacity: 1,
                    y: 0
                  }}

                  transition={{
                    duration: 0.4
                  }}

                  className="
                    bg-white
                    dark:bg-gray-900
                    rounded-4xl
                    overflow-hidden
                    shadow-lg
                    border
                    border-gray-100
                    dark:border-gray-800
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                  "
                >

                  <div className="
                    h-56
                    overflow-hidden
                    relative
                  ">

                    <div className="
                      absolute
                      top-4
                      right-4
                      bg-white
                      p-2
                      rounded-full
                      shadow-md
                      z-10
                    ">

                      <FaHeart className="
                        text-red-500
                      " />

                    </div>

                    <img
                      src={prod.strMealThumb}
                      alt={prod.strMeal}
                      className="
                        w-full
                        h-full
                        object-cover
                        hover:scale-110
                        transition
                        duration-500
                      "
                    />

                  </div>

                  <div className="p-6">

                    <div className="
                      inline-block
                      bg-yellow-400
                      px-3
                      py-1
                      rounded-lg
                      text-xs
                      font-bold
                      mb-3
                    ">

                      S/ {prod.price}

                    </div>

                    <h2 className="
                      text-lg
                      font-bold
                      mb-4
                      dark:text-white
                    ">

                      {
                        mealTranslations[
                          prod.strMeal
                        ] || prod.strMeal
                      }

                    </h2>

                    <div className="
                      flex
                      gap-2
                    ">

                      <Link
                        to={`/detail/${prod.idMeal}`}
                        className="flex-1"
                      >

                        <button className="
                          w-full
                          bg-blue-600
                          hover:bg-blue-700
                          text-white
                          py-2.5
                          rounded-xl
                          font-bold
                          text-sm
                          transition
                        ">

                          Ver

                        </button>

                      </Link>

                      <button
                        onClick={() =>
                          addToCart(prod)
                        }
                        className="
                          flex-1
                          bg-green-500
                          hover:bg-green-700
                          text-white
                          py-2.5
                          rounded-xl
                          font-bold
                          text-sm
                          transition
                        "
                      >

                        Agregar

                      </button>

                    </div>

                  </div>

                </motion.div>

              ))

            )

          }

        </div>

      </main>

    </div>

  );
}