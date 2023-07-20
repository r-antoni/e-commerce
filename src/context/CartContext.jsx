import React, {createContext, useEffect, useState} from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart) {
      const totalAmount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(totalAmount);
    }
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  const addItem = (item, id) => {
    const addedItem = {...item, amount: 1};
    const cartItem = cart.find((newItem) => newItem.id === id);
    if (cartItem) {
      const newCart = [...cart].map((newItem) => {
        if (newItem.id === id) {
          return {...newItem, amount: cartItem.amount + 1};
        } else {
          return newItem;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, addedItem]);
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter((newItem) => newItem.id !== id);
    setCart(newCart);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((newItem) => newItem.id === id);
    addItem(cartItem, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((newItem) => newItem.id === id);
    if (cartItem) {
      const newCart = cart.map((newItem) => {
        if (newItem.id === id) {
          return {...newItem, amount: cartItem.amount - 1};
        } else {
          return newItem;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeItem(id);
    }
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{addItem, cart, removeItem, increaseAmount, decreaseAmount, clearCart, itemAmount, totalPrice}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
