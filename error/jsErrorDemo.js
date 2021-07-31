/**
 * JS has different types of errors that occur during the code execution:
 * 
 * 1. Error: base type of other errors
 * 2. EvalError
 * 3. RangeError
 * 4. ReferenceError
 * 5. SyntaxError
 * 6. TypeError
 * 7. URIError
 */

 /**
 * EvalError thrown when eval() is used as anything rather than function call
 * However, web browsers tend to throw TypeError instead of EvalError in this situation
 */
try {
    var e = new eval(); 
} catch(error) {
    console.log(error.name, "-", error.message); // TypeError - eval is not a constructor
}


// RangeError occurs when a number is outside the bounds of its range
try{
    var list = Array(Number.MAX_VALUE);
} catch(error) {
    console.log(error.name, "-", error.message); // RangeError - Invalid array length
} 

/**
 * ReferenceError occurs when you reference to a variable, a function, or an object 
 * that does not exist.
 */
try {
    var a = a + b;
} catch(error) {
    console.log(error.name, "-", error.message); // ReferenceError - b is not defined
}


// SyntaxError occurs in a string that passed to eval()
try {
    eval('a x b');
} catch(error) {
    console.log(error.name, "-", error.message); // SyntaxError - Unexpected identifier
}

// TypeError occurs when a variable is of an unexpected type 

try {
    var x = new "String";  
} catch(error) {
    console.log(error.name, "-", error.message); // TypeError - "\"String\" is not a constructor
}

// or an access to a nonexistent method
var db = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'secret'
  };
   
try {
    db.connect();
} catch(error) { 
    console.log(error.name, "-", error.message); // TypeError - db.connect is not a function
}

// URIError error occurs when using the encodeURI() or decodeURI() with a malformed URI
console.log(encodeURI('\uDFFF'));