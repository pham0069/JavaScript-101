// integer numbers
var decimal = 100;

// Put first digit as zero to represent octal digit number
var oct = 060; // 48
var outOfRangeOct = 090; // 90

// Put 0x in front hexadecimal digits [0-9,A-F] to represent hexadecimal number
var hexa = 0xf; // 15

// floating point numbers
var f1 = 12.5;
var f2 = .3; // 0.3, valid, but not recommended

// floating point number is converted to integer number if the number appears to be whole
// this is to optimize memory use since floatint point consumes 2 times memory vs integer
var f3 = 200.00; // interpreted as 200 integer

// e-notation
var f4 = 2.17e6; // 2170000

// Number limits
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

/**
 * NAN has 2 characteristics
 * 1. Any operation with NAN returns NAN
 * 2. NAN does not equal any value, including itself
 */
console.log('a'/2); // NaN;
console.log(NaN/2); // NaN
console.log(NaN == NaN); // false