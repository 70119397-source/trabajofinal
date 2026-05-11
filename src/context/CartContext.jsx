import {
  createContext,
  useEffect,
  useState
} from "react";

export const CartContext = createContext();

export function CartProvider({
  children
}) {

  const [cart, setCart] = useState(() => {

    const savedCart =
      localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  const addToCart = (product) => {

    const existingProduct = cart.find(

      item => item.idMeal === product.idMeal

    );

    if (existingProduct) {

      const updatedCart = cart.map(item =>

        item.idMeal === product.idMeal

          ? {
              ...item,
              quantity: item.quantity + 1
            }

          : item

      );

      setCart(updatedCart);

    }

    else {

      const newProduct = {

        ...product,

        quantity: 1

      };

      setCart([

        ...cart,

        newProduct

      ]);

    }

  };

  const removeFromCart = (id) => {

    const filteredCart = cart.filter(

      item => item.idMeal !== id

    );

    setCart(filteredCart);

  };

  const clearCart = () => {

    setCart([]);

  };

  const total = cart.reduce(

    (acc, item) =>

      acc + (item.price * item.quantity),

    0

  );

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total
      }}
    >

      {children}

    </CartContext.Provider>

  );
}