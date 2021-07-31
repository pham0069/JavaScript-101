// Return a function 
function compareBy(propName) {
    return function (a, b) {
        var x = a[propName],
            y = b[propName];
 
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1
        } else {
            return 0;
        }
    }
}

var products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];

function displayProducts(products) {
    for (let i = 0; i < products.length; i++) {
        console.log(`name: ${products[i].name}, price: ${products[i].price}`);
    }
}
// Sort products by name
console.log('Products sorted by name:');
products.sort(compareBy('name'));
displayProducts(products);

// Sort products by price
console.log('Products sorted by price:');
products.sort(compareBy('price'));
displayProducts(products);