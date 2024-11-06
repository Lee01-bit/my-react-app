import React  from "react";


function CardItem({ image, description, name, price }) {

    return(
        <>
        
        <div className="menuItem">
            <div  style={{ backgroundImage: `url(${image})`}}></div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>R{price}</p>

        </div>
        </>
        )
}

export default CardItem