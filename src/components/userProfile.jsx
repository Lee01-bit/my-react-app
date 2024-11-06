import React from 'react';
import CardItem from "./CardItem";
import { Burgers , ComfortFoods, Pizza } from "../menuItems/MenuList";
import Margherita from "../images/m.pizza.jpeg"
import bBurger from "../images/buffaloBurger.jpeg"
import chickenPotPie from "../images/Beef-Guiness-Pie-300px.jpg"



function UserProfile() {
     

    return (
        <div>
        <div className="userProfile">
            <h2>Welcome User</h2>
            <h1>Your Selected Items:</h1>
        </div>
        <div className="menuList">

                                <div className='usersProfile' >
                                <CardItem 
                                    image={Margherita}
                                    name={Pizza[0].name}
                                    description={Pizza[0].description}
                                />
                                <CardItem 
                                    image={bBurger}
                                    name={Burgers[0].name}
                                    description={Burgers[0].description}
                                />
                                <CardItem 
                                    image={chickenPotPie}
                                    name={ComfortFoods[0].name}
                                    description={ComfortFoods[0].description}
                                />
                            </div>
                        
                    </div>
       
    
      
        </div>
    );
}


export default UserProfile;


