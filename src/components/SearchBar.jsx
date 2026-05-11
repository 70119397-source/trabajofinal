import { FaSearch, FaTimes } from "react-icons/fa";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-10 relative group">
      <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />

      <input
        type="text"
        placeholder="        Buscar comida..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          bg-white
          dark:bg-gray-900
          dark:text-white
          pl-14 pr-12 py-5 /* Ajustamos paddings para los iconos */
          rounded-2xl
          shadow-md
          outline-none
          text-lg
          border
          border-gray-200
          dark:border-gray-700
          focus:ring-4
          focus:ring-blue-300
          transition
        "
      />

      {search && (
        <button
          onClick={() => setSearch("")}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
}