var cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

// Filter using loop
var bigCities = [];
for (var i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);

// Filter using Array.filter() method
bigCities = cities.filter(function (e) {
    return e.population > 3000000;
});
console.log(bigCities);


// More complicated example
function isInRange(value) {
    if (typeof value !== 'number') {
        return false;
    }
    // this refers to the second argument passed to filter() method, i.e. range
    return value >= this.lower && value <= this.upper;
}
var data = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];
var range = {lower: 1, upper: 10};
var numberInRange = data.filter(isInRange, range);
console.log(numberInRange); // [10, 1, 5]
