import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { Burgers , ComfortFoods, Pizza } from "../menuItems/MenuList";



function Home(){
    const [selectedItems, setSelectedItems] = useState([]);

    const addItemToProfile = (item) => {
        setSelectedItems((prevItems) => [...prevItems, item]);
    };

    useEffect(() => {
        // This could be where you send data to a backend or update context
        console.log("Selected items updated:", selectedItems);
        
    }, [selectedItems]);

    return (
        <>
            <div className="homeContainer">
                <div className="homeContent" >
                    <h1>Welcome to the Food Emporium </h1>
                    <p>
                    Bringing Flavorful Moments to Life  
                    </p>
                </div>
            </div>
                <div className="menu">
                    <div className="homeHeader">
                        <h1 >Different Types of Foods</h1>
                    </div>
                    <h2 className="menuTitle">Pizza</h2>
                    <div className="menuList">{Pizza.map((menuItem, key) =>{
                            return(
                                <div key={key}>
                                <CardItem 
                                    key={key}
                                    image={menuItem.image}
                                    name={menuItem.name}
                                    description={menuItem.description}
                                />
                            <button onClick={() => addItemToProfile(menuItem)}>Add to Profile</button>
                            </div>
                            )
                            })} 
                    </div>
                     <div className="homeHeader">
                    </div>
                    <h2 className="menuTitle">Burgers</h2>
                    <div className="menuList">{Burgers.map((menuItem, key) =>{
                        return(
                        <div key={key}>

                            <CardItem 
                                image={menuItem.image}
                                name={menuItem.name}
                                description={menuItem.description}
                            />
                            <button onClick={() => addItemToProfile(menuItem)}>Add to Profile</button>

                        </div>
                        )
                    })} </div>
                     <div className="homeHeader">
                    </div>
                    <h2 className="menuTitle">Comfort Foods</h2>
                    <div className="menuList">{ComfortFoods.map((menuItem, key) =>{
                        return(
                            <div key={key}>
                            <CardItem 
                                key={key}
                                image={menuItem.image}
                                name={menuItem.name}
                                description={menuItem.description}
                        />
                    <button onClick={() => addItemToProfile(menuItem)}>Add to Profile</button>

                        </div>
                        )
                    })} </div>
                </div>
               
                
              
        </>
   
      
       
    )
}
export default Home 
