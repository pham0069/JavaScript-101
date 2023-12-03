
// || (or) operator logic
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// If the first value is an object, the logical OR operator returns the first value.
console.log({id: 1} || 10); // Object {id: 1}

// If the first value evaluates to false, the logical OR operator returns the second value.
console.log(false || 10); // 10

// If both values are null, the logical OR operator returns null.
console.log(null || null); // null

// If both values are NaN, the logical OR operator return NaN.
console.log(NaN || NaN); // NaN

// If both values are undefined, then logical OR operator returns undefined.
console.log(undefined || undefined); // undefined