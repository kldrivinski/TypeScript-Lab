"use strict";
// tallest mountain
let mountains = [{ name: "Kilimanjaro", height: 19341 }, { name: "Everest", height: 29029 }, { name: "Denali", height: 20310 }];
function findNameOfTallestMountain(mountains) {
    let tallest = mountains[0].height;
    let currentTallest = mountains[0].name;
    mountains.forEach(mountain => {
        if (mountain.height > tallest) {
            tallest = mountain.height;
            currentTallest = mountain.name;
        }
    });
    return currentTallest;
}
let answer = findNameOfTallestMountain(mountains);
console.log(answer);
let products = [{ name: "ring", price: 66 }, { name: "necklace", price: 88 }, { name: "earring", price: 22 }];
function calcAverageProductPrice(products) {
    let total = 0;
    let average = 0;
    products.forEach(product => total += product.price);
    average = total / products.length;
    return average;
}
let results = calcAverageProductPrice(products);
console.log(results);
let inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4,
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20,
    }
];
function calcInventoryValue(inventory) {
    let totalValue = 0;
    inventory.forEach(item => {
        let itemValue = item.product.price * item.quantity;
        totalValue += itemValue;
    });
    return totalValue;
}
let productValue = calcInventoryValue(inventory);
console.log(productValue);
