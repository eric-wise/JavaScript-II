// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const add = (a, b) => a + b;
add(1,2);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let counter = 0;
  // Return a function that when invoked increments and returns a counter variable.
  let myCounter = 1
  function myClosure() {
    myCounter++
  }
  myClosure()
  myClosure()
  myClosure()
  myClosure()
  console.log(myCounter);
};
counter()

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let num = 0;
  return counterMachine = {
    increment: function() {
      num += 1;
      console.log(num);
    },
    decrement: function() {
      num -= 1;
      console.log(num);
    }
  }
};

const newCounterMachine = counterFactory();
console.log('\n')
newCounterMachine.increment()
newCounterMachine.increment()
newCounterMachine.decrement()
newCounterMachine.decrement()

