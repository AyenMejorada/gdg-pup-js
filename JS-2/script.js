/********************
// Step 1: Create Global Variables
- Create two global variables (e.g., globalVar, anotherGlobalVar).
- Assign any values you like.
********************/
var globalVar = "hello, this is a global variable";
var anotherGlobalVar = "YEYYY! I am another global variable";

/********************
// Step 2: Create a Function to Demonstrate Function Scope
- Define a function (e.g., demoFunctionScope).
- Inside this function:
  1. Declare a local variable (e.g., localVar).
  2. Log both the global variable(s) and the local variable to the console.
  3. Return a string that includes both the global and local variables.
********************/
function demoFunctionScope() {
    var localVar = "I am declared as a local variable";  // the local variable
    
    // we are logging both global and local variables
    console.log("I am inside demoFunctionScope (globalVar):", globalVar);
    console.log("Me too! I am inside demoFunctionScope (anotherGlobalVar):", anotherGlobalVar);
    console.log("Me three! I'm the Local Variable", localVar);

    // next will be the returning a string with both variables
    return `Function returned: Global ${globalVar}, Local: ${localVar}`;
}

/********************
// Step 3: Call the Function and Log Its Return Value
- Call your function from Step 2 and store its result in a variable.
- Use console.log() to display the return value in the console.
********************/
console.log(demoFunctionScope());  // this is the call function and log the return value

/********************
// Step 4: Demonstrate Block Scope
- Write an if statement that always executes (if (true) { ... }).
- Inside this block:
  1. Use let to declare a block-scoped variable (e.g., blockVar).
  2. Log the block-scoped variable within the block.
- Try logging the same variable outside the block and observe what happens.
********************/
if (true) {
    let blockVar = "I exist only in this block";
    console.log("blockVar inside block:", blockVar); 
}

// trying to log blockVar outside the block will cause an error
try {
    console.log("blockVar outside block:", blockVar);
} catch (error) {
    console.log("Error:", error.message);
}
