import React from "react";

function CardItem({ image, description, name }) {
    return(
        <>
        <div className="cardItem">
            <div style={{ backgroundImage: `url(${image})`}}></div>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
        </>
    )
}

export default CardItem