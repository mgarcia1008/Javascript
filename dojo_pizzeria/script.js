function pizzaOven(crustType, sauceType, cheeses, toppings){
var pizza = {};
pizza.crustType = crustType;
pizza.sauceType = sauceType;
pizza.cheeses = cheeses;
pizza.toppings = toppings;
return pizza;
}

var basic = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(basic);

var greek = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(greek);

var veg =pizzaOven("thin crust", "traditional", "mozzarella", ["bell peppers", "onions", "mushrooms", "spinach"]);
console.log(veg);

var mindiSpecial =pizzaOven("hand tossed", "traditional", "mozzarella", ["pineapple", "chicken"]);
console.log(mindiSpecial);

//bonus challenge:Create a function called random pizza that uses math.rancom to create a random pizza.
//did not complete 4/28/23

var crustType = ["hand tossed", "deep dish", "thin crust"];
var sauceType = ["traditional", "marinara", "alfredo"];
var cheeses = ["mozzarella", "feta", "cheddar"];
var toppings = ["olives", "peppers", "chicken", "ham", "pineapple", "mushrooms", "pepperoni"];

function randomPick(arr){
    var i = math.floor(arr.lenght * math.random());
    return arr[i];
}
function randomPizza(){
var pizza = {};
pizza.crustType = randomPick(crustType);
pizza.sauceType = randomPick(sauceType);
pizza.cheeses = randomPick(cheeses);
pizza.toppings = randomPick(toppings);
return pizza;
}
console.log(randomPizza());
