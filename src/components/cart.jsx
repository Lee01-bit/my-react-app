import React from "react";
import { useCart } from "../components/CartContext";

export const Cart = () => {
const { cart, removeItemFromCart, calculateTotal } = useCart();

return (
<div className="cartPage">
    <h2>Your Shopping Cart</h2>
    {cart.length === 0 ? (
    <p>Your cart is empty.</p>
    ) : (
    <div>
        <ul>
        {cart.map((item, index) => (
            <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeItemFromCart(index)}>Remove</button>
            </li>
        ))}
        </ul>
        <div>
        <strong>Total: ${calculateTotal()}</strong>
        </div>
        <button>Proceed to Checkout</button>
    </div>
    )}
</div>
);
};
