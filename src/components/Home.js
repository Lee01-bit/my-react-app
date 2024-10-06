import React from "react";
import MenuItem from "../components/MenuItem";
import { Burgers , ComfortFoods, Pizza } from "../menuItems/MenuList";


function Home(){
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
                        <MenuItem 
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            description={menuItem.description}
                        />
                        )
                    })} </div>
                     <div className="homeHeader">
                    </div>
                    <h2 className="menuTitle">Burgers</h2>
                    <div className="menuList">{Burgers.map((menuItem, key) =>{
                        return(
                        <MenuItem 
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            description={menuItem.description}
                        />
                        )
                    })} </div>
                     <div className="homeHeader">
                    </div>
                    <h2 className="menuTitle">Comfort Foods</h2>
                    <div className="menuList">{ComfortFoods.map((menuItem, key) =>{
                        return(
                        <MenuItem 
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            description={menuItem.description}
                        />
                        )
                    })} </div>
                </div>
        </>
        
      
       
    )
}
export default Home