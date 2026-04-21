import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. قراءة البيانات من المتصفح عند التحميل
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("sahane_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. حفظ البيانات في المتصفح عند أي تغيير
  useEffect(() => {
    localStorage.setItem("sahane_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // دالة إضافة منتج جديد
  const addToCart = (product) => {
    setCartItems((prev) => {
      const isExist = prev.find((item) => item.title === product.title);
      if (isExist) {
        return prev.map((item) =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // دالة تحديث الكمية (زائد وناقص)
  const updateQuantity = (title, type) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.title === title) {
          if (type === "inc") return { ...item, quantity: item.quantity + 1 };
          if (type === "dec" && item.quantity > 1) return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const removeFromCart = (title) => {
    setCartItems(cartItems.filter((item) => item.title !== title));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);