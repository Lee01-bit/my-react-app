import pepperoni from "../images/Quick-and-Easy-Pepperoni-Pizza-700x700.webp"
import Margherita from "../images/m.pizza.jpeg"
import bbqChicken from "../images/bbqChicken.jpeg"
import spicyBurger from "../images/Jburger.webp"
import bBurger from "../images/buffaloBurger.jpeg"
import ClassicBurger from "../images/cheeseBurger.jpeg"
import macAndCheese from "../images/Creamy-Three-Cheese-Mac-and-Cheese-4.webp"
import chickenPotPie from "../images/Beef-Guiness-Pie-300px.jpg"
import grilledCheese from "../images/grilledCheese.jpeg"

export const Pizza = [
    {
        name: "Margherita",
        description: "A classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
        image: Margherita,
        price: 20.00
    },
    {
        name: "Pepperoni",
        description: "A savory pizza topped with spicy pepperoni and melted cheese.",
        image: pepperoni,
        price: 40.00
    },
    {
        name: "BBQ Chicken",
        description: "Grilled chicken, barbecue sauce, and red onions on a cheesy base.",
        image: bbqChicken,
        price: 60.00
    }
    
];
export const Burgers = [
    {
        name: "Spicy Jalapeño Burger",
        description: "A spicy beef patty topped with jalapeños, pepper jack cheese, and a zesty chipotle mayo.",
        image: spicyBurger,
        price: 50.00
    },
    {
        name: "Buffalo Chicken Burger",
        description: "A spicy breaded chicken patty tossed in buffalo sauce, topped with lettuce and ranch dressing.",
        image: bBurger,
        price: 20.00
    },
    {
        name: "Classic Cheeseburger",
        description: "A juicy beef patty topped with melted cheddar cheese, lettuce, tomato, and pickles.",
        image: ClassicBurger,
        price: 25.00
    }
]
export const ComfortFoods =[
    {
        name: "Macaroni and Cheese",
        description: "Creamy, cheesy macaroni baked to perfection, topped with a golden breadcrumb crust.",
        image: macAndCheese,
        price: 20.00
    },
    {
        name: "Chicken Pot Pie",
        description: "A flaky crust filled with tender chicken, vegetables, and rich gravy.",
        image: chickenPotPie,
        price: 20.00
    },
    {
        name: "Grilled Cheese Sandwich",
        description: "A classic sandwich made with gooey melted cheese between two slices of golden, toasted bread.",
        image: grilledCheese,
        price: 20.00
    }
]