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
};

restaurant.deliveryFood({
    time: '21:30',
    addres: 'tehran',
    main_index: 0,
    starter_index: 2,
});
restaurant.deliveryFood({
    time: '22:00',
    addres: 'london',
});

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
