export class Dish {
    name: string;
    image: string;
    description: string;
    price: number;
    availability: boolean;
    allergyInfo: string[];
    ingredients: string[];
    constructor(name: string, image: string, description: string, price: number, availability: boolean, allergyInfo: string[], ingredients: string[]) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.availability = availability;
        this.allergyInfo = allergyInfo;
        this.ingredients = ingredients;
        dishes.push(this);
    }
}

export const dishes: Dish[] = []

let fish = new Dish("Vegan Fish", "./assets/img/vegfish.jpg", "This vegan fish is soft, refreshing, juicy, lemony, and full of Mediterranean flavors", 14.50, true, ["meat", "fish"], ["Tofu", "capers", "Cherry tomatoes", "tuna", "Lemon"]);
let meatballs = new Dish("Italian Meatballs", "./assets/img/meatball.jpg", " These easy oven-baked Italian meatballs are incredibly tender and juicy with irresistible flavors that will have you craving for more.", 16.99, true, ["meat"], ["artichokes", "lemon", "garlic"]);
let branzino = new Dish("Branzino ripieno", "./assets/img/branzino.jpg", "Grilled branzino, stuffed with tomatoes and onion", 18.99, false, ["vegeterian", "fish"], ["sea bass", "tomatoes", "onion"]);
let calzone = new Dish("Calzone", "./assets/img/calzone.jpg", "A calzone is an Italian oven-baked folded pizza, often described as a turnover, made with leavened dough.", 7.99, false, ["lactose"], ["Dough", "Mozzarella", "mushrooms"]);
let spaghetti = new Dish("Spaghetti con la mollica", "./assets/img/spaghetti.jpg", "Mollica means crumb in Italian, and pasta alla mollica is yet another example in Mediterranean cooking of turning simple bread into something spectacular.", 10.99, true, ["gluten", "vegeterian"], ["spaghetti", "bread crumbs", "anchovies"]);
let polenta = new Dish("Lasagna", "./assets/img/lasagna.jpg", "This classic lasagna recipe is made with an easy meat sauce as the base. Layer the sauce with noodles and cheese, then bake until bubbly!", 12.99, false, ["meat"], ["beef", "tomato paste", "Italian seasoning", "bell pepper"]);