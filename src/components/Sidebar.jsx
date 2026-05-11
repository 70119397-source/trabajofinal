import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  categoryTranslations
} from "../data/translations";

export default function Sidebar({
  categories
}) {

  return (

    <aside className="
      hidden
      lg:block
      w-72
      min-h-screen
      bg-white
      dark:bg-gray-900
      border-r
      border-gray-200
      dark:border-gray-800
      p-6
      sticky
      top-0
    ">

      <h2 className="
        text-3xl
        font-bold
        mb-8
        text-blue-600
      ">
           Categorías
      </h2>

      <div className="
        flex
        flex-col
        gap-4
      ">

        {
          categories.map(cat => (

            <NavLink
  key={cat.strCategory}
  to={`/products/${cat.strCategory}`}
  className={({ isActive }) => `
    p-4 rounded-2xl transition-all duration-300 font-medium
    ${isActive 
      ? "bg-blue-600 text-white shadow-lg scale-105" 
      : "bg-gray-100 dark:bg-gray-800 dark:text-white hover:bg-blue-500 hover:text-white"}
  `}
>
  {categoryTranslations[cat.strCategory] || cat.strCategory}
</NavLink>

          ))
        }

      </div>

    </aside>

  );
}