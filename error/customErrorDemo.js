/**
 * Create custom error that inherits from built-in error
 */
function InvalidCallError(message) {
    this.name = 'InvalidCallError';
    this.message = message;
}
   
InvalidCallError.prototype = Object.create(Error.prototype);
InvalidCallError.prototype.constructor = Error;

try { 
    throw new InvalidCallError("Dont call me please");
} catch (error) {
    console.log(error.name, "-", error.message);
}