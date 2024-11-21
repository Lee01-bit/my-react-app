import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import "./userProfile.css"; 

const UserProfile = () => {
  const { cartItems } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleModalOpen = (item) => {
    console.log("Item clicked:", item);
    setSelectedItem(item); 
  };

  const handleModalClose = () => {
    setSelectedItem(null); 
  };
  console.log("Selected item:", selectedItem);

  return (
    <div className="userProfile">
      <h1>Welcome to the User Profile</h1>
      <h2>Your Selected Items</h2>
      <div className="cartItemsContainer">
        {cartItems.length === 0 ? (
          <p className="noItemsMessage">No items selected yet.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cartItem">
              <img src={item.image} alt={item.name} className="cartItemImage" />
              <div className="cartItemDetails">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button
                  className="viewIngredientsButton"
                  onClick={() => handleModalOpen(item)}
                >
                  View Ingredients
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedItem && (
        <div className="modalOverlay" onClick={handleModalClose}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h2>Ingredients and Instructions for {selectedItem.name}</h2>
            <h3>Ingredients:</h3>
            <ul>
              {selectedItem.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
              {selectedItem.instructions?.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            <button className="closeModalButton" onClick={handleModalClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
