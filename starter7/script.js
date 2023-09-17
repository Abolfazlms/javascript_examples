'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    orderFood: function (starter_index, main_index) {
        return [this.starterMenu[starter_index], this.mainMenu[main_index]];
    },
    deliveryFood: function ({
        time,
        addres,
        main_index = 1,
        starter_index = 2,
    }) {
        console.log(
            `Order Received!\n${this.starterMenu[starter_index]} and ${this.mainMenu[main_index]} will be delivered to ${addres} at ${time}`
        );
    },
    orderPasta: function (ing1, ing2, ing3) {
        //ing : ingredients
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
        );
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, otherIngredients);
    },
};

//Destructuring

// restaurant.deliveryFood({
//     time: '21:30',
//     addres: 'tehran',
//     main_index: 0,
//     starter_index: 2,
// });
// restaurant.deliveryFood({
//     time: '22:00',
//     addres: 'london',
// });
// const ingredients = [
//     prompt("Let's make pasta! ingredients 1?"),
//     prompt('ingredients 2?'),
//     prompt('ingredients 3?'),
// ];

// restaurant.orderPasta(...ingredients);

// const simple_array = [21, 22, 25];

// const a = simple_array[0];
// const b = simple_array[1];
// const c = simple_array[2];

// const [x, y, z] = simple_array;

// console.log(a, b, c, x, y, z);

// const [first, second] = restaurant.categories;

// let [main, , second] = restaurant.categories;
// console.log(main, second);

//Switching Variables

// const temp = main;
// main = second;
// second = temp;

// [main, second] = [second, main];

// console.log(main, second);

// const [starter, main] = restaurant.orderFood(2, 0);

// console.log(starter, main);

//Nested Destructuring
// const array2 = [21, 22, 23, [24, 25]];

// const [i, , , j] = array2;
// const [i, , , [j, k]] = array2;
// console.log(i, j, k);

//Default values
// const [i = 1, j = 1, k = 1] = [21, 22];
// console.log(i, j, k);

// const { name, openingHours, mainMenu, categories } = restaurant;
// console.log(name, mainMenu, categories, openingHours);

// const { name: restaurantName, openingHours: hours } = restaurant;
// console.log(restaurantName, hours);

// const { menu = [], starterMenu: starter = [] } = restaurant;

// console.log(menu, starter);

// const { fri } = openingHours;
// const {fri:{open,close}} = openingHours;
// const {
//     fri: { open: ro, close: rc },
// } = openingHours;
// console.log(ro, rc);

// const array1 = [21, 22, 23, 24, 25];
// const array2 = [...array1, 26, 27];

// console.log(array2);

// console.log(...array2);
// console.log(21, 22, 23, 24, 25, 26, 27);

const newMenu = [...restaurant.mainMenu, 'Hamberger'];
console.log(newMenu);

//shallow copy
const copyMenu = [...restaurant.mainMenu];
console.log(copyMenu);

//merge two arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const username = 'ali';
const array3 = [...username, 'r', 'e', 'z', 'a'];
console.log(array3);

const restaurant2 = { founding: 1998, ...restaurant, founder: 'ali' };
console.log(restaurant2);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Classico Italiano 2';

console.log(restaurantCopy.name);
console.log(restaurant.name);

// REST Patterns

const array1 = [21, 22, 23, 24, 25, ...[26, 27]];
const [a, b, ...others] = array1;
console.log(a, b, others);

const [pizza, pasta, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];

console.log(pizza, pasta, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    // console.log(numbers);
    console.log(sum);
};
add(21, 4);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);
add(25, 35, 5);

restaurant.orderPizza('chicken', 'onion', 'mushrooms', 'olives');
restaurant.orderPizza('chicken');
