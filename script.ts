// tallest mountain

interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];



function findNameOfTallestMountain(mountains: Mountain[]): string {
    // set the variables outside the loop so that as the loop runs, it compares to these variables and then updates them
    let tallest: number = mountains[0].height;
    let currentTallest: string = mountains[0].name;
    mountains.forEach(mountain => {
        if (mountain.height > tallest) {
            tallest = mountain.height;
            currentTallest = mountain.name;
        }

    })

    return currentTallest;
}


let answer = findNameOfTallestMountain(mountains);

console.log(answer);



// products

interface Product {
    name: string;
    price: number;

}


let products: Product[] = [
    { name: "ring", price: 66 },
    { name: "necklace", price: 88 },
    { name: "earring", price: 22 }
];

function calcAverageProductPrice(products: Product[]): number {
    let total: number = 0;
    let average: number = 0;
    products.forEach(product =>
        total += product.price
    )
    average = total / products.length
    return average;
}

let results = calcAverageProductPrice(products);
console.log(results);


// inventory

interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
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
]

function calcInventoryValue(inventory: InventoryItem[]): number {
    let totalValue: number = 0;
    inventory.forEach(item => {
        let itemValue: number = item.product.price * item.quantity
        totalValue += itemValue;

    })
    return totalValue
}


let productValue: number = calcInventoryValue(inventory);

console.log(productValue);