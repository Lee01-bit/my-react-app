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
      ingredients: ["Flour", "Tomatoes", "Mozzarella", "Basil", "Olive Oil"],
      instructions: [
        "Preheat your oven to 500°F (260°C).",
        "Roll out the dough into a thin circle.",
        "Spread a thin layer of olive oil and tomato sauce over the dough.",
        "Top with slices of mozzarella and fresh basil leaves.",
        "Bake for 7-10 minutes until the crust is golden and cheese is bubbly.",
      ],
    },
    {
      name: "Pepperoni",
      description: "A savory pizza topped with spicy pepperoni and melted cheese.",
      image: pepperoni,
      ingredients: ["Flour", "Tomato Sauce", "Mozzarella", "Pepperoni", "Olive Oil"],
      instructions: [
        "Preheat your oven to 500°F (260°C).",
        "Roll out the dough and spread tomato sauce evenly over it.",
        "Add a layer of mozzarella cheese, followed by pepperoni slices.",
        "Bake for 8-12 minutes or until the cheese is bubbly and the crust is golden.",
      ],
    },
    {
      name: "BBQ Chicken",
      description: "Grilled chicken, barbecue sauce, and red onions on a cheesy base.",
      image: bbqChicken,
      ingredients: ["Flour", "BBQ Sauce", "Chicken Breast", "Mozzarella", "Red Onions", "Cilantro"],
      instructions: [
        "Preheat your oven to 500°F (260°C).",
        "Spread BBQ sauce over rolled-out pizza dough.",
        "Add shredded mozzarella cheese, grilled chicken slices, and red onion rings.",
        "Bake for 8-10 minutes, then sprinkle with chopped cilantro before serving.",
      ],
    },
  ];
  
  export const Burgers = [
    {
      name: "Spicy Jalapeño Burger",
      description: "A spicy beef patty topped with jalapeños, pepper jack cheese, and a zesty chipotle mayo.",
      image: spicyBurger,
      ingredients: ["Ground Beef", "Jalapeños", "Pepper Jack Cheese", "Chipotle Mayo", "Burger Bun"],
      instructions: [
        "Shape ground beef into patties and season with salt and pepper.",
        "Grill or pan-fry the patties until cooked to your preference.",
        "Toast the burger buns lightly.",
        "Assemble the burger with chipotle mayo, the beef patty, pepper jack cheese, and jalapeños.",
      ],
    },
    {
      name: "Buffalo Chicken Burger",
      description: "A spicy breaded chicken patty tossed in buffalo sauce, topped with lettuce and ranch dressing.",
      image: bBurger,
      ingredients: ["Chicken Breast", "Flour", "Egg", "Breadcrumbs", "Buffalo Sauce", "Lettuce", "Ranch Dressing", "Burger Bun"],
      instructions: [
        "Coat chicken breast with flour, dip in beaten egg, and cover with breadcrumbs.",
        "Fry the breaded chicken until golden brown and fully cooked.",
        "Toss the fried chicken in buffalo sauce.",
        "Assemble the burger with lettuce, ranch dressing, and the buffalo chicken patty.",
      ],
    },
    {
      name: "Classic Cheeseburger",
      description: "A juicy beef patty topped with melted cheddar cheese, lettuce, tomato, and pickles.",
      image: ClassicBurger,
      ingredients: ["Ground Beef", "Cheddar Cheese", "Lettuce", "Tomato", "Pickles", "Burger Bun"],
      instructions: [
        "Shape ground beef into patties and season with salt and pepper.",
        "Grill or pan-fry the patties until cooked to your preference.",
        "Place a slice of cheddar cheese on the patty while still on the heat to melt it.",
        "Toast the burger buns lightly.",
        "Assemble the burger with lettuce, tomato, pickles, and the cheesy beef patty.",
      ],
    },
  ];
  
  export const ComfortFoods = [
    {
      name: "Macaroni and Cheese",
      description: "Creamy, cheesy macaroni baked to perfection, topped with a golden breadcrumb crust.",
      image: macAndCheese,
      ingredients: ["Macaroni", "Cheddar Cheese", "Milk", "Butter", "Flour", "Breadcrumbs"],
      instructions: [
        "Boil macaroni in salted water until al dente and drain.",
        "Make a roux by melting butter, adding flour, and whisking in milk until thickened.",
        "Stir in shredded cheddar cheese until smooth.",
        "Combine the cheese sauce with macaroni, transfer to a baking dish, and top with breadcrumbs.",
        "Bake at 350°F (175°C) for 20-25 minutes until golden and bubbly.",
      ],
    },
    {
      name: "Chicken Pot Pie",
      description: "A flaky crust filled with tender chicken, vegetables, and rich gravy.",
      image: chickenPotPie,
      ingredients: ["Chicken Breast", "Carrots", "Peas", "Onion", "Butter", "Flour", "Chicken Broth", "Pie Crust"],
      instructions: [
        "Cook chicken and chop into small pieces.",
        "Sauté onions, carrots, and peas in butter until soft.",
        "Sprinkle flour over vegetables and stir in chicken broth to make a gravy.",
        "Add cooked chicken to the mixture and pour into a pie crust.",
        "Cover with another pie crust, seal edges, and bake at 375°F (190°C) for 30-40 minutes until golden.",
      ],
    },
    {
      name: "Grilled Cheese Sandwich",
      description: "A classic sandwich made with gooey melted cheese between two slices of golden, toasted bread.",
      image: grilledCheese,
      ingredients: ["Bread", "Cheddar Cheese", "Butter"],
      instructions: [
        "Butter one side of each slice of bread.",
        "Place cheddar cheese between the unbuttered sides of the bread slices.",
        "Grill the sandwich in a skillet over medium heat until golden brown on both sides and cheese is melted.",
      ],
    },
  ];
  