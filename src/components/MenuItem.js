import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { FaHeartCirclePlus } from "react-icons/fa6";

const MenuItem = ({ image, name, description, ingredients, instructions }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const item = { image, name, description, ingredients, instructions };
    addToCart(item);
    alert(`${name} added to your profile!`);
  };

  return (
    <div className="menuItem">
      <img src={image} alt={name} className="menuItemImage" />
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={handleAddToCart} aria-label={`Add ${name} to your cart`}>
        <FaHeartCirclePlus />
      </button>
    </div>
  );
};

export default MenuItem;
