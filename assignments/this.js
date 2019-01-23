/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. By default, "this" binds to the Window. That means the value of "this" will be the Window Object.
* 2. Implicit binding means "this" will be whatever called it. So, with example.this, "this" becomes "example".
* 3. When using a constructor function, "this" becomes the name of the function created.
* 4. When using call or apply, "this" becomes the name of whatever is called/applied. e.g. If you reference a variable, the variale name becomes "this".
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const anObj = {
  first: "1st",
  second: "2nd",
  aFunc: function() {
    console.log(`The value of this object's keys are ${this.first} and ${this.second}.`);
  },
}

// Principle 3

// code example for New Binding

function ExampleObj(example) {
  this.key = example;
  console.log(example); 
  this.reveal = function() {
    return this.key;
  };
}

const firstExample = new ExampleObj('first example'); //?
const secondExample = new ExampleObj('second example');

firstExample.reveal(); //?
secondExample.reveal(); //?

// Principle 4

// code example for Explicit Binding

function ExplicitObj(example) {
  this.key = example;
  console.log(example); 
  this.reveal = function() {
    return this.key;
  };
}

const firstExplicit = new ExplicitObj('first example'); //?
const secondExplicit = new ExplicitObj('second example');

firstExplicit.reveal.call(secondExplicit); //?
secondExplicit.reveal.apply(firstExplicit); //?