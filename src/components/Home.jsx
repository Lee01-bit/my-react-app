import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import { Burgers, ComfortFoods, Pizza } from '../menuItems/MenuList';
import { useCart } from "../components/CartContext" ;  

function Home() {
const [selectedItems, setSelectedItems] = useState([]);
const { addItemToCart } = useCart();  

const handleAddToCart = (item) => {
addItemToCart(item);  
};

useEffect(() => {

console.log('Selected items updated:', selectedItems);
}, [selectedItems]);

return (
<>
    <div className="homeContainer">
    <div className="homeContent">
        <h1>Welcome to the Food Emporium</h1>
        <p>Bringing Flavorful Moments to Life</p>
    </div>
    </div>
    <div className="menu">
    <div className="homeHeader">
        <h1>Different Types of Foods</h1>
    </div>

    <h2 className="menuTitle">Pizza</h2>
    <div className="menuList">
        {Pizza.map((menuItem, key) => (
        <div key={key}>
            <CardItem
            image={menuItem.image}
            name={menuItem.name}
            description={menuItem.description}
            price={menuItem.price}
            />
            <button onClick={() => handleAddToCart(menuItem)}>Add to Cart</button>
        </div>
        ))}
    </div>

    <h2 className="menuTitle">Burgers</h2>
    <div className="menuList">
        {Burgers.map((menuItem, key) => (
        <div key={key}>
            <CardItem
            image={menuItem.image}
            name={menuItem.name}
            description={menuItem.description}
            price={menuItem.price}
            />
            <button onClick={() => handleAddToCart(menuItem)}>Add to Cart</button>
        </div>
        ))}
    </div>

    <h2 className="menuTitle">Comfort Foods</h2>
    <div className="menuList">
        {ComfortFoods.map((menuItem, key) => (
        <div key={key}>
            <CardItem
            image={menuItem.image}
            name={menuItem.name}
            description={menuItem.description}
            price={menuItem.price}
            />
            <button onClick={() => handleAddToCart(menuItem)}>Add to Cart</button>
        </div>
        ))}
    </div>
    </div>
</>
);
}

export default Home;
