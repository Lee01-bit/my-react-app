import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

const addItemToCart = (item) => {
setCart((prevItems) => [...prevItems, item]);
};

const removeItemFromCart = (index) => {
setCart(cart.filter((_, i) => i !== index));
};

const calculateTotal = () => {
return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
};

return (
<CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, calculateTotal }}>
    {children}
</CartContext.Provider>
);
};


export const useCart = () => {
return useContext(CartContext);
};
