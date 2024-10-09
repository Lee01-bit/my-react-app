import React from "react";

function CardItem({ image, description, name }) {
    return(
        <>
        <div className="menuItem">
            <div  style={{ backgroundImage: `url(${image})`}}></div>
            <h1>{name}</h1>
            <p>{description}</p>
            <button className="button">Add to User Profile</button>
        </div>
        </>
    )
}

export default CardItem