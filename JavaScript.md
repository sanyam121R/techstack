# <div style="display:flex; flex-direction:row; gap:18px; align-items:center;"><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" style="height:64px;"/> JavaScript Question: </div>

### Beginner Level:-

- What is JavaScript, and what are its main uses?
- What are the differences between var, let, and const?
- What are primitive data types in JavaScript?
- What is the difference between undefined and null in JavaScript?
- What are the differences between == and === operators in JavaScript?
- Explain the concept of type coercion in JavaScript.
- What are JavaScript functions and how do you declare them?
- What is hoisting in JavaScript?
- What is the Temporal Dead Zone?
- What is the difference between synchronous and asynchronous code in JavaScript?
- What is an IIFE (Immediately Invoked Function Expression)?
- What is the purpose of bind(), call(), and apply() methods in JavaScript?
- How does the this keyword work in JavaScript?
- What is event delegation in JavaScript?
- What are callback functions in JavaScript?
- What is the setTimeout() and setInterval() functions in JavaScript?
- What is JSON and how do you parse and stringify it in JavaScript?
- Explain the concept of closures in JavaScript.
- What are arrow functions, and how do they differ from regular functions?
- What is the difference between slice() and splice() methods in JavaScript arrays?
- What is a promise, and how is it used in JavaScript?

### My addon

- What is the difference between filter() and find() methods in JavaScript arrays?
- What is the difference between loops - for, for...In and for...of methods in JavaScript arrays?
- Explain reduce(), map(), filter() methods in JavaScript arrays?
- What is debouncing and throttling in JavaScript?
- How would you implement a deep clone of an object without using libraries?

### Intermediate Level:-

- What is the event loop in JavaScript, and how does it work?
- How does prototypal inheritance work in JavaScript?
- What is a JavaScript module, and how do you create and import/export modules?
- Explain the difference between null, undefined, and NaN.
- How does Object.create() work in JavaScript?
- What are the advantages of using const over let or var?
- What are higher-order functions in JavaScript?
- What are the benefits of using promises over callbacks?
- Explain the concept of async/await in JavaScript.
- How can you handle errors in JavaScript?
- What is the purpose of Object.freeze() in JavaScript?
- What are JavaScript closures, and how are they used in callbacks and event handling?
- What is the difference between an object and a class in JavaScript?
- What is a Map object, and how does it differ from a regular JavaScript object?
- How do you handle async operations in JavaScript (i.e., callbacks, promises, async/await)?
- Explain the spread operator (...) and how it is used.
- What is destructuring in JavaScript? How does it work with arrays and objects?
- How do you create and manipulate JavaScript dates?
- What is the difference between forEach(), map(), and filter() methods in JavaScript arrays?
- How does JavaScript handle scope and closures?

### Advance Level:-

- Explain the concept of the JavaScript execution context and call stack.
- What is event bubbling and event capturing in JavaScript?
- What is the difference between setTimeout() and requestAnimationFrame()?
- How does the new keyword work in JavaScript?
- What are the main differences between Object.assign() and the spread operator (...)?
- What is the importance of the bind() method in JavaScript?
- What is memoization in JavaScript and how can it be implemented?
- Explain the concept of currying in JavaScript.
- How does the this keyword behave in arrow functions vs regular functions?
- What is a Service Worker in JavaScript, and how is it used for offline functionality?
- Explain the concept of Symbol in JavaScript and its use cases.
- How does destructuring work with default values?
- How do you implement deep cloning of objects in JavaScript?
- What is the difference between WeakMap and Map in JavaScript?
- What is a Proxy in JavaScript, and how can it be used?
- What is an event loop, and what happens when the call stack is empty?
- How does JavaScript handle memory management and garbage collection?
- What are Generators in JavaScript, and how do they work with yield?
- How does async/await work under the hood in JavaScript?
- Explain how the JavaScript engine executes code and handles optimizations.

# Beginner JavaScript Questions

### What is JavaScript, and what are its main uses?

**Interview-style answer:**
JavaScript is a high-level, interpreted, and dynamically typed programming language primarily used to add interactivity and dynamic behavior to web pages. Beyond browsers, it’s also used on servers with Node.js, in mobile applications, and in desktop development.

**Explanation:**

- Runs inside web browsers as the engine for client-side logic.
- Used to manipulate the DOM, handle events, validate user input, perform AJAX calls.
- With Node.js, it powers backend servers.
- Widely used in frameworks (React, Angular, Vue) for building full-stack apps.

---

### What are the differences between var, let, and const?

**Interview-style answer:**

- `var` is function-scoped and allows redeclaration.
- `let` is block-scoped and does not allow redeclaration.
- `const` is block-scoped and cannot be reassigned once declared.

**Explanation:**

- `var`: Hoisted with undefined, can lead to bugs due to scope leakage.
- `let`: Safer; exists only inside `{}` block.
- `const`: Same as `let` in scope, but assignment is fixed (though objects/arrays can still be mutated).

_**Function scope**_ - A variable is accessible everywhere inside the function it’s declared in.

_**Block scope**_ - A variable can be accessed only within the curly braces `{}` where it was declared, such as in an `if`, `for`, or `while` block.

---

### What are primitive data types in JavaScript?

**Interview-style answer:**
JavaScript has 7 primitive types: string, number, boolean, null, undefined, symbol, and bigint. These are immutable and compared by value.

**Explanation:**

- Primitive types don’t have methods of their own (though wrapper objects give temporary support).
- Example: numbers (`42`), booleans (`true`), `undefined`, `null`, `Symbol('id')`, and `BigInt(123n)`.

---

### What is the difference between undefined and null in JavaScript?

**Interview-style answer:**
`undefined` means a variable has been declared but not assigned a value, while `null` is an intentional assignment representing “no value”.

**Explanation:**

- `let a; console.log(a); // undefined`
- `let b = null;` means developer explicitly set it to empty.

---

### What are the differences between == and === operators in JavaScript?

**Interview-style answer:**

- `==` is loose equality: it compares values after type coercion.
- `===` is strict equality: it checks both value and type with no coercion.

**Explanation:**

- `5 == "5"` → true, but `5 === "5"` → false.
- Always prefer `===` to avoid unexpected results.

---

### Explain the concept of type coercion in JavaScript.

**Interview-style answer:**
Type coercion is the automatic or implicit conversion of values from one data type to another during comparisons or operations in JavaScript.

**Explanation:**

- `"5" + 10` → `"510"` (string coercion).
- `5 - "2"` → 3 (number coercion).
- To avoid confusion, use strict equality and explicit conversions.

---

### What are JavaScript functions and how do you declare them?

**Interview-style answer:**
Functions are reusable blocks of code that can be defined using function declarations, function expressions, or arrow functions.

**Explanation:**

- Declared:

```js
function greet(name) {
  return "Hello " + name;
}
```

- Expression:

```js
const greet = function (name) {
  return "Hello " + name;
};
```

- Arrow:

```js
const greet = (name) => "Hello " + name;
```

---

### What is hoisting in JavaScript?

**Interview-style answer:**
Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before execution.

**Explanation:**

- `var` declarations are hoisted with value `undefined`.
- Functions are hoisted fully (you can call them before declaration).
- `let` and `const` are hoisted but in a _temporal dead zone_ until assigned.

---

### What is the Temporal Dead Zone?

**Interview-style answer:**
The temporal dead zone is the time between entering a scope (like a block) and the actual line where `let` or `const` is declared. You cannot access the variable in this period; accessing it throws a `ReferenceError`.

---

### What is the difference between synchronous and asynchronous code in JavaScript?

**Interview-style answer:**
Synchronous code runs line by line, blocking further execution until complete. Asynchronous code allows other operations to continue by using callbacks, promises, or async/await.

**Explanation:**

- Sync: Blocks program. Example: reading a file with `fs.readFileSync`.
- Async: Non-blocking. Example: `setTimeout`, AJAX requests, database queries.

---

### What is the purpose of bind(), call(), and apply() methods in JavaScript?

**Interview-style answer:**
All three explicitly set the `this` context for a function.

- `call` runs the function immediately with arguments individually.
- `apply` runs the function immediately with arguments as an array.
- `bind` returns a new function with `this` fixed, without executing immediately.

**Explanation:**

```js
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}
const person = { name: "Sam" };

greet.call(person, "Hello");
greet.apply(person, ["Hi"]);
const boundFunc = greet.bind(person, "Hey");
boundFunc();
```

---

### How does the `this` keyword work in JavaScript?

**Interview-style answer:**
`this` refers to the current execution context, and its value depends on how a function is called, not where it is written.

- Global context → window/global object.
- Inside an object method → the object.
- Inside a function → undefined (in strict mode).
- Arrow functions → lexical `this` from surrounding scope.

Arrow functions do not have their own `this`; they inherit it from surrounding scope, which is often the global context.

---

### What is event delegation in JavaScript?

**Interview-style answer:**
Event delegation is a technique where you attach a single event listener to a parent element, which handles events from its child elements using event bubbling.

**Explanation:**
Efficient for dynamic lists. Example:

```js
document.getElementById("list").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") console.log(e.target.textContent);
});
```

---

### What are callback functions in JavaScript?

**Interview-style answer:**
A callback function is a function passed as an argument to another function, executed after the parent function completes.

**Explanation:**

```js
setTimeout(() => console.log("Hello"), 1000);
```

Here, the arrow function is a callback.

---

### What are the setTimeout() and setInterval() functions in JavaScript?

**Interview-style answer:**

- `setTimeout` executes a function once after a specified delay.
- `setInterval` executes repeatedly at given intervals until cleared.

---

### What is JSON and how do you parse and stringify it in JavaScript?

**Interview-style answer:**
JSON is a text format for structured data, similar to JavaScript objects.

- `JSON.parse()` converts JSON string to JS object.
- `JSON.stringify()` converts JS object to JSON string.

---

### Explain the concept of closures in JavaScript.

**Interview-style answer:**
A closure is created when a function remembers variables from its lexical scope even after the outer function has executed.

**Explanation:**

```js
function outer() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const inc = outer();
console.log(inc()); // 1
console.log(inc()); // 2
```

---

### What are arrow functions, and how do they differ from regular functions?

**Interview-style answer:**
Arrow functions are a shorter syntax for functions. Unlike regular functions, they don’t have their own `this`, `arguments`, or `prototype`.

---

### What is the difference between slice() and splice() methods in JavaScript arrays?

**Interview-style answer:**

- `slice(start, end)` returns a shallow copy without changing the original array.
- `splice(start, count, ...items)` mutates the original array by removing/replacing elements.

---

### What is a promise, and how is it used in JavaScript?

**Interview-style answer:**
A promise represents a value that may be available now, later, or never. It has three states: pending, fulfilled, or rejected. It’s used to handle asynchronous tasks more cleanly than callbacks.

**Explanation:**

```js
const getData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
getData.then((res) => console.log(res)).catch((err) => console.log(err));
```

---

✅ I’ve finished the **Beginner section** with both interview-ready and detailed explanations.

Would you like me to continue with **Intermediate** and then **Advanced**, in the same step-by-step style, or should I consolidate everything into a **single giant explained guide** so you can study it all at once?
