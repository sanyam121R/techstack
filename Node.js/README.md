# <div style="display:flex; flex-direction:row; gap:8px; align-items:end;"><img src="https://nodejs.org/static/images/logo.svg" style="height:56px; margin:6px 0 8px 0;"/><span style="margin-bottom:10px; color:#00df53">Questions:</span></div>

### [Beginner Level](#beginner-questions) :-

- [What is Node.js and how does it work?](#what-is-nodejs-and-how-does-it-work)
- [What is the difference between Node.js and traditional server-side languages?](#what-is-the-difference-between-nodejs-and-traditional-server-side-languages)
- [What is npm and how do you use it?](#what-is-npm-and-how-do-you-use-it)
- [What are modules in Node.js and how do you create them?](#what-are-modules-in-nodejs-and-how-do-you-create-them)
- [What is the difference between require() and import in Node.js?](#what-is-the-difference-between-require-and-import-in-nodejs)
- [What are global objects in Node.js?](#what-are-global-objects-in-nodejs)
- [What is the difference between process and global in Node.js?](#what-is-the-difference-between-process-and-global-in-nodejs)
- [How do you handle file operations in Node.js?](#how-do-you-handle-file-operations-in-nodejs)
- [What is the difference between synchronous and asynchronous file operations?](#what-is-the-difference-between-synchronous-and-asynchronous-file-operations)
- [What are streams in Node.js?](#what-are-streams-in-nodejs)

### [Intermediate Level](#intermediate-questions) :-

- [What is the Event Loop in Node.js and how does it work?](#what-is-the-event-loop-in-nodejs-and-how-does-it-work)
- [What is the difference between process.nextTick() and setImmediate()?](#what-is-the-difference-between-processnexttick-and-setimmediate)
- [What are clusters in Node.js and how do you use them?](#what-are-clusters-in-nodejs-and-how-do-you-use-them)
- [What is the difference between spawn, exec, and fork in child_process?](#what-is-the-difference-between-spawn-exec-and-fork-in-childprocess)
- [What are buffers in Node.js and when do you use them?](#what-are-buffers-in-nodejs-and-when-do-you-use-them)
- [What is middleware in Express.js?](#what-is-middleware-in-expressjs)
- [What is the difference between app.use() and app.get() in Express?](#what-is-the-difference-between-appuse-and-appget-in-express)
- [How do you handle errors in Node.js applications?](#how-do-you-handle-errors-in-nodejs-applications)
- [What is the difference between callback, Promise, and async/await in Node.js?](#what-is-the-difference-between-callback-promise-and-asyncawait-in-nodejs)
- [What are environment variables and how do you use them?](#what-are-environment-variables-and-how-do-you-use-them)
- [How does libuv integrate with Node.js event loop?](#how-does-libuv-integrate-with-nodejs-event-loop)
- [Explain Express router mounting and param middleware.](#explain-express-router-mounting-and-param-middleware)

### [Advanced Level](#advanced-questions) :-

- [How do you structure a mid-sized backend service in Node/TypeScript so that it stays maintainable as it grows]()
- [How would you profile and optimize an API that suddenly became slow under load?]()
- [What is the difference between V8 engine and Node.js?](#what-is-the-difference-between-v8-engine-and-nodejs)
- [How do you implement custom streams in Node.js?](#how-do-you-implement-custom-streams-in-nodejs)
- [What is the difference between worker_threads and child_process?](#what-is-the-difference-between-workerthreads-and-childprocess)
- [Common security vulns (XSS/CSRF/injection) & mitigations (helmet, sanitize-html, rate-limiter).](#common-security-vulns-xsscsrfinjection--mitigations-helmet-sanitize-html-rate-limiter)
- [Input validation (Joi/Zod schemas) & sanitization.](#input-validation-joizod-schemas--sanitization)
- [JWT vs sessions: Implement refresh tokens, blacklist.](#jwt-vs-sessions-implement-refresh-tokens-blacklist)
- [How do you implement caching strategies in Node.js?](#how-do-you-implement-caching-strategies-in-nodejs)
- [What is the difference between memory leaks and performance issues in Node.js?](#what-is-the-difference-between-memory-leaks-and-performance-issues-in-nodejs)
- [How do you implement authentication and authorization in Node.js?](#how-do-you-implement-authentication-and-authorization-in-nodejs)
- [What is the difference between microservices and monolithic architecture in Node.js?](#what-is-the-difference-between-microservices-and-monolithic-architecture-in-nodejs)
- [How do you implement real-time communication in Node.js?](#how-do-you-implement-real-time-communication-in-nodejs)
- [What is the difference between horizontal and vertical scaling in Node.js?](#what-is-the-difference-between-horizontal-and-vertical-scaling-in-nodejs)
- [How do you implement logging and monitoring in Node.js applications?](#how-do-you-implement-logging-and-monitoring-in-nodejs-applications)
- [Show me how you’d design error handling for an API that talks to MongoDB and two external services.]()

## [Senior Level (10+ Years Experience)](#senior-level-10-years-experience-) :-
### System Design
- [System design: URL shortener (1M writes/sec) or chat app (WebSockets + Redis). Trade-offs?](#system-design-url-shortener-1m-writessec-or-chat-app-websockets--redis-trade-offs)
- [Design Rate Limiter (Fixed Window, Token Bucket)](#design-rate-limiter-fixed-window-token-bucket)
- [Chat App Trade-offs (URL Covered)](#chat-app-trade-offs-url-covered)
---
- [Scaling: Horizontal (NGINX load balancer + sticky sessions); circuit breakers (Opossum).](#scaling-horizontal-nginx-load-balancer--sticky-sessions-circuit-breakers-opossum)
- [Microservices: gRPC vs REST; service mesh (Istio).](#microservices-grpc-vs-rest-service-mesh-istio)
- [Deployment: PM2 vs Docker Compose; Kubernetes manifests for Node app; blue-green deploys.](#deployment-pm2-vs-docker-compose-kubernetes-manifests-for-node-app-blue-green-deploys)
- [Security Vulnerabilities & Mitigations ***OWASP** Top 10*](#security-vulnerabilities--mitigations-owasp-top-10)

Other
- [How do you implement custom Node.js modules and packages?](#how-do-you-implement-custom-nodejs-modules-and-packages)
- [What is the difference between native modules and JavaScript modules in Node.js?](#what-is-the-difference-between-native-modules-and-javascript-modules-in-nodejs)
- [How do you implement custom protocols and network layers in Node.js?](#how-do-you-implement-custom-protocols-and-network-layers-in-nodejs)
- [How do you implement custom build tools and transpilers for Node.js?](#how-do-you-implement-custom-build-tools-and-transpilers-for-nodejs)
- [How do you implement custom debugging and profiling tools for Node.js?](#how-do-you-implement-custom-debugging-and-profiling-tools-for-nodejs)
- [What is the difference between Node.js and Deno?](#what-is-the-difference-between-nodejs-and-deno)
- [What is the difference between Node.js and Bun?](#what-is-the-difference-between-nodejs-and-bun)
- [What is the difference between Node.js and other JavaScript runtimes?](#what-is-the-difference-between-nodejs-and-other-javascript-runtimes)
- [What is the future of Node.js and JavaScript runtimes?](#what-is-the-future-of-nodejs-and-javascript-runtimes)

# Beginner Questions

### What is Node.js and how does it work?

**Interview-style answer:**
Node.js is a JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run on the server-side. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient for building scalable network applications.

**Explanation:**

```js
// Node.js runs JavaScript outside the browser
console.log("Hello from Node.js!");

// It provides access to system resources
const fs = require("fs");
const path = require("path");

// File system operations
fs.readFile("package.json", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// HTTP server
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

### What is the difference between Node.js and traditional server-side languages?

**Interview-style answer:**
Node.js is single-threaded and event-driven, while traditional languages like Java/PHP are multi-threaded. Node.js handles concurrent requests through the event loop, making it more efficient for I/O-intensive applications.

**Explanation:**

```js
// Node.js - Single-threaded, event-driven
const http = require("http");

const server = http.createServer((req, res) => {
  // Non-blocking I/O
  setTimeout(() => {
    res.end("Response after 1 second");
  }, 1000);

  // This doesn't block other requests
  console.log("Request received");
});

server.listen(3000);

// Traditional approach (pseudo-code):
// Each request = new thread
// Thread 1: handles request A
// Thread 2: handles request B
// Thread 3: handles request C
// More memory usage, context switching overhead

// Node.js approach:
// Single thread handles all requests
// Event loop manages I/O operations
// More efficient for concurrent connections
```

---

### What is npm and how do you use it?

**Interview-style answer:**
npm (Node Package Manager) is the default package manager for Node.js. It manages dependencies, scripts, and project metadata. It provides access to over 1 million packages and handles version management.

**Explanation:**

```js
// package.json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "nodemon": "^2.0.20",
    "jest": "^29.0.0"
  }
}

// npm commands
// npm init - Initialize new project
// npm install express - Install dependency
// npm install -D nodemon - Install dev dependency
// npm run start - Run script
// npm update - Update dependencies
// npm audit - Security audit
```

---

### What are modules in Node.js and how do you create them?

**Interview-style answer:**
Modules are reusable pieces of code that can be exported and imported. Node.js uses CommonJS modules by default, where `module.exports` exports and `require()` imports modules.

**Explanation:**

```js
// math.js - Module file
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Export individual functions
module.exports.add = add;
module.exports.subtract = subtract;

// Or export as object
module.exports = {
  add,
  subtract,
  multiply: (a, b) => a * b,
};

// app.js - Import and use
const math = require("./math");
console.log(math.add(5, 3)); // 8

// Or destructure
const { add, subtract } = require("./math");
console.log(add(5, 3)); // 8

// ES6 modules (with "type": "module" in package.json)
// export { add, subtract };
// import { add, subtract } from './math.js';
```

---

### What is the difference between require() and import in Node.js?

**Interview-style answer:**
`require()` is CommonJS (synchronous, runtime), while `import` is ES6 modules (asynchronous, compile-time). CommonJS is default in Node.js, but ES6 modules are supported with proper configuration.

**Explanation:**

```js
// CommonJS (require)
const fs = require("fs");
const { readFile } = require("fs");

// ES6 modules (import)
import fs from "fs";
import { readFile } from "fs";

// Key differences:
// 1. Loading:
//    require() - synchronous, loads at runtime
//    import - asynchronous, loads at compile time

// 2. Hoisting:
//    require() - not hoisted
//    import - hoisted

// 3. Dynamic imports:
const module = await import("./module.js"); // ES6
const module = require("./module.js"); // CommonJS

// 4. Tree shaking:
//    require() - imports entire module
//    import - can import specific exports (better for bundling)
```

---

### What are global objects in Node.js?

**Interview-style answer:**
Global objects are available in all modules without requiring them. Key globals include `global`, `process`, `console`, `Buffer`, `__dirname`, `__filename`, and `module`.

**Explanation:**

```js
// Global objects available everywhere
console.log(global === globalThis); // true

// Process object
console.log(process.version); // Node.js version
console.log(process.platform); // Operating system
console.log(process.argv); // Command line arguments

// Console methods
console.log("Info");
console.error("Error");
console.warn("Warning");
console.time("timer");
// ... some operation
console.timeEnd("timer");

// Buffer for binary data
const buf = Buffer.from("Hello", "utf8");
console.log(buf); // <Buffer 48 65 6c 6c 6f>

// File system paths
console.log(__dirname); // Current directory
console.log(__filename); // Current file path

// Module system
console.log(module.exports); // Current module exports
console.log(require.cache); // Module cache
```

---

### What is the difference between process and global in Node.js?

**Interview-style answer:**
`global` is the global object (like `window` in browsers), while `process` is a specific global object that provides information about the current Node.js process and allows interaction with it.

**Explanation:**

```js
// global - Global namespace
global.myVariable = "Hello";
console.log(myVariable); // 'Hello' (available everywhere)

// process - Process information and control
console.log(process.pid); // Process ID
console.log(process.version); // Node.js version
console.log(process.platform); // OS platform
console.log(process.cwd()); // Current working directory

// Process events
process.on("exit", (code) => {
  console.log(`Process exiting with code ${code}`);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err);
  process.exit(1);
});

// Process methods
process.exit(0); // Exit with success code
process.chdir("/new/path"); // Change directory
process.env.NODE_ENV = "production"; // Set environment variable
```

---

### How do you handle file operations in Node.js?

**Interview-style answer:**
Node.js provides the `fs` module for file operations. Use asynchronous methods for non-blocking I/O, and synchronous methods only when necessary. Always handle errors properly.

**Explanation:**

```js
const fs = require("fs");
const path = require("path");

// Asynchronous file operations (recommended)
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});

// Promise-based approach
const fsPromises = require("fs").promises;

async function readFileAsync() {
  try {
    const data = await fsPromises.readFile("data.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}

// File operations
fs.writeFile("output.txt", "Hello World", (err) => {
  if (err) throw err;
  console.log("File written");
});

fs.appendFile("log.txt", "New log entry\n", (err) => {
  if (err) throw err;
});

fs.mkdir("new-folder", (err) => {
  if (err) throw err;
});

fs.readdir(".", (err, files) => {
  if (err) throw err;
  console.log(files);
});

// Synchronous operations (use sparingly)
const data = fs.readFileSync("data.txt", "utf8");
console.log(data);
```

---

### What is the difference between synchronous and asynchronous file operations?

**Interview-style answer:**
Synchronous operations block the event loop until completion, while asynchronous operations don't block and use callbacks/Promises. Always prefer asynchronous for better performance and scalability.

**Explanation:**

```js
const fs = require("fs");

// Synchronous (blocking)
console.log("Before sync read");
const data = fs.readFileSync("large-file.txt", "utf8");
console.log("After sync read"); // This waits for file read

// Asynchronous (non-blocking)
console.log("Before async read");
fs.readFile("large-file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File read complete");
});
console.log("After async read"); // This executes immediately

// Performance comparison
console.time("sync");
fs.readFileSync("file1.txt", "utf8");
fs.readFileSync("file2.txt", "utf8");
fs.readFileSync("file3.txt", "utf8");
console.timeEnd("sync"); // Total time = sum of all reads

console.time("async");
let completed = 0;
const files = ["file1.txt", "file2.txt", "file3.txt"];

files.forEach((file) => {
  fs.readFile(file, "utf8", (err, data) => {
    completed++;
    if (completed === files.length) {
      console.timeEnd("async"); // Total time ≈ longest read
    }
  });
});
```

---

### What are streams in Node.js?

**Interview-style answer:**
Streams are objects that let you read data from a source or write data to a destination continuously. They're memory-efficient for handling large datasets and provide backpressure handling.

**Explanation:**

```js
const fs = require("fs");

// Readable stream
const readStream = fs.createReadStream("large-file.txt", { encoding: "utf8" });

readStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.length, "bytes");
});

readStream.on("end", () => {
  console.log("Stream ended");
});

readStream.on("error", (err) => {
  console.error("Stream error:", err);
});

// Writable stream
const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello ");
writeStream.write("World!");
writeStream.end();

// Pipe streams
fs.createReadStream("input.txt").pipe(fs.createWriteStream("output.txt"));

// Transform stream
const { Transform } = require("stream");

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

fs.createReadStream("input.txt")
  .pipe(upperCaseTransform)
  .pipe(fs.createWriteStream("output.txt"));
```

---

# Intermediate Questions

### What is the Event Loop in Node.js and how does it work?

**Interview-style answer:**
The Event Loop is Node.js's core mechanism that handles asynchronous operations. It has multiple phases: timers, pending callbacks, idle/prepare, poll, check, and close callbacks. It processes events in a single thread.

**Explanation:**

```js
// Event Loop phases:
// 1. Timers: setTimeout, setInterval
// 2. Pending callbacks: I/O callbacks deferred to next loop
// 3. Idle, prepare: internal use
// 4. Poll: fetch new I/O events
// 5. Check: setImmediate callbacks
// 6. Close callbacks: socket.on('close', ...)

console.log("Start");

setTimeout(() => console.log("Timer 1"), 0);
setImmediate(() => console.log("Immediate 1"));

process.nextTick(() => console.log("NextTick 1"));

Promise.resolve().then(() => console.log("Promise 1"));

fs.readFile(__filename, () => {
  console.log("I/O callback");

  setTimeout(() => console.log("Timer 2"), 0);
  setImmediate(() => console.log("Immediate 2"));
  process.nextTick(() => console.log("NextTick 2"));
});

console.log("End");

// Output order:
// Start
// End
// NextTick 1
// Promise 1
// Timer 1
// Immediate 1
// I/O callback
// NextTick 2
// Immediate 2
// Timer 2
```

---

### What is the difference between process.nextTick() and setImmediate()?

**Interview-style answer:**
`process.nextTick()` executes in the current phase before any other operation, while `setImmediate()` executes in the check phase of the next event loop iteration. `nextTick` has higher priority.

**Explanation:**

```js
// process.nextTick() - highest priority
process.nextTick(() => console.log("NextTick 1"));
process.nextTick(() => console.log("NextTick 2"));

// setImmediate() - check phase
setImmediate(() => console.log("Immediate 1"));
setImmediate(() => console.log("Immediate 2"));

// setTimeout() - timers phase
setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 0);

// Output:
// NextTick 1
// NextTick 2
// Timeout 1
// Timeout 2
// Immediate 1
// Immediate 2

// Recursive nextTick can starve the event loop
function recursiveNextTick() {
  process.nextTick(recursiveNextTick);
}
// This prevents other phases from executing!

// Use setImmediate for recursive operations
function recursiveImmediate() {
  setImmediate(recursiveImmediate);
}
// This allows other phases to execute
```

---

### What are clusters in Node.js and how do you use them?

**Interview-style answer:**
Clusters allow you to create child processes that share server ports. They enable you to take advantage of multi-core systems by creating multiple instances of your application.

**Explanation:**

```js
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    // Restart worker
    cluster.fork();
  });
} else {
  // Workers can share any TCP connection
  const http = require("http");

  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Hello from worker ${process.pid}`);
    })
    .listen(8000);

  console.log(`Worker ${process.pid} started`);
}

// Load balancing
// Master process distributes incoming connections
// Each worker handles requests independently
// If worker dies, master creates new one
```

---

### What is the difference between spawn, exec, and fork in child_process?

**Interview-style answer:**
`spawn` launches a command in a new process, `exec` runs a command and buffers the output, and `fork` creates a new Node.js process. Each has different use cases and performance characteristics.

**Explanation:**

```js
const { spawn, exec, fork } = require("child_process");

// spawn - streaming output
const ls = spawn("ls", ["-la"]);
ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});
ls.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});
ls.on("close", (code) => {
  console.log(`Process exited with code ${code}`);
});

// exec - buffered output
exec("ls -la", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

// fork - new Node.js process
const child = fork("./child.js");
child.send({ message: "Hello from parent" });
child.on("message", (msg) => {
  console.log("Message from child:", msg);
});

// child.js
process.on("message", (msg) => {
  console.log("Message from parent:", msg);
  process.send({ message: "Hello from child" });
});

// Use cases:
// spawn - long-running processes, large output
// exec - simple commands, small output
// fork - Node.js modules, inter-process communication
```

---

### What are buffers in Node.js and when do you use them?

**Interview-style answer:**
Buffers are fixed-size chunks of memory that store binary data. They're essential for handling file I/O, network protocols, and any binary data manipulation in Node.js.

**Explanation:**

```js
// Creating buffers
const buf1 = Buffer.alloc(10); // 10 bytes, filled with zeros
const buf2 = Buffer.allocUnsafe(10); // 10 bytes, uninitialized
const buf3 = Buffer.from("Hello"); // From string
const buf4 = Buffer.from([1, 2, 3, 4]); // From array

// Buffer operations
console.log(buf3.toString()); // 'Hello'
console.log(buf3.toString("hex")); // '48656c6c6f'
console.log(buf3.length); // 5

// Writing to buffer
buf1.write("Hello", 0);
console.log(buf1.toString()); // 'Hello'

// Reading from buffer
console.log(buf3[0]); // 72 (ASCII 'H')
console.log(buf3.readUInt8(0)); // 72

// Buffer concatenation
const buf5 = Buffer.concat([buf3, Buffer.from(" World")]);
console.log(buf5.toString()); // 'Hello World'

// Use cases:
// 1. File operations
const fs = require("fs");
const data = fs.readFileSync("image.jpg"); // Returns Buffer

// 2. Network protocols
const net = require("net");
const socket = net.createConnection(80, "example.com");
socket.write(Buffer.from("GET / HTTP/1.1\r\n\r\n"));

// 3. Crypto operations
const crypto = require("crypto");
const hash = crypto.createHash("sha256");
hash.update(Buffer.from("Hello"));
console.log(hash.digest("hex"));
```

---

### What is middleware in Express.js?

**Interview-style answer:**
Middleware are functions that execute during the request-response cycle. They can modify requests/responses, end the cycle, or call the next middleware. They're essential for authentication, logging, and request processing.

**Explanation:**

```js
const express = require("express");
const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next(); // Call next middleware
});

// Built-in middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static("public")); // Serve static files

// Custom middleware
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }
  // Verify token logic
  req.user = { id: 1, name: "John" };
  next();
}

// Route-level middleware
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "Protected route", user: req.user });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Third-party middleware
const cors = require("cors");
app.use(cors());

const helmet = require("helmet");
app.use(helmet());
```

---

### What is the difference between app.use() and app.get() in Express?

**Interview-style answer:**
`app.use()` mounts middleware for all HTTP methods and paths (or specified paths), while `app.get()` handles only GET requests to specific routes. `use()` is for middleware, `get()` is for route handlers.

**Explanation:**

```js
const express = require("express");
const app = express();

// app.use() - middleware for all methods
app.use("/api", (req, res, next) => {
  console.log("API middleware for all methods");
  next();
});

// app.get() - only GET requests
app.get("/api/users", (req, res) => {
  res.json({ users: [] });
});

// app.use() with specific path
app.use("/static", express.static("public"));

// app.use() without path (all routes)
app.use((req, res, next) => {
  console.log("Middleware for all routes");
  next();
});

// Multiple methods
app.get("/users", (req, res) => res.json({ method: "GET" }));
app.post("/users", (req, res) => res.json({ method: "POST" }));
app.put("/users/:id", (req, res) => res.json({ method: "PUT" }));
app.delete("/users/:id", (req, res) => res.json({ method: "DELETE" }));

// Order matters
app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

app.get("/test", (req, res) => {
  console.log("Route handler");
  res.send("Hello");
});

app.use((req, res, next) => {
  console.log("Second middleware"); // Won't run for /test
  next();
});
```

---

### How do you handle errors in Node.js applications?

**Interview-style answer:**
Error handling in Node.js involves try-catch blocks, error events, and proper error propagation. Always handle errors at the appropriate level and provide meaningful error messages.

**Explanation:**

```js
// Synchronous error handling
try {
  const data = fs.readFileSync("nonexistent.txt", "utf8");
} catch (err) {
  console.error("File read error:", err.message);
}

// Asynchronous error handling
fs.readFile("nonexistent.txt", "utf8", (err, data) => {
  if (err) {
    console.error("File read error:", err.message);
    return;
  }
  console.log(data);
});

// Promise-based error handling
fsPromises
  .readFile("nonexistent.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.error("File read error:", err.message));

// Async/await error handling
async function readFile() {
  try {
    const data = await fsPromises.readFile("nonexistent.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error("File read error:", err.message);
  }
}

// Global error handlers
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

// Express error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Custom error classes
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}

// Usage
throw new ValidationError("Invalid input data");
```

---

### What is the difference between callback, Promise, and async/await in Node.js?

**Interview-style answer:**
Callbacks are the traditional approach with potential callback hell. Promises provide better error handling and chaining. Async/await is syntactic sugar over Promises that makes asynchronous code look synchronous.

**Explanation:**

```js
// Callback approach
function getUserData(userId, callback) {
  fs.readFile(`users/${userId}.json`, "utf8", (err, data) => {
    if (err) return callback(err);
    callback(null, JSON.parse(data));
  });
}

// Callback hell
getUserData(1, (err, user) => {
  if (err) throw err;
  getUserData(user.friendId, (err, friend) => {
    if (err) throw err;
    getUserData(friend.friendId, (err, friendOfFriend) => {
      if (err) throw err;
      console.log(friendOfFriend);
    });
  });
});

// Promise approach
function getUserDataPromise(userId) {
  return fsPromises
    .readFile(`users/${userId}.json`, "utf8")
    .then((data) => JSON.parse(data));
}

// Promise chaining
getUserDataPromise(1)
  .then((user) => getUserDataPromise(user.friendId))
  .then((friend) => getUserDataPromise(friend.friendId))
  .then((friendOfFriend) => console.log(friendOfFriend))
  .catch((err) => console.error(err));

// Async/await approach
async function getUserChain(userId) {
  try {
    const user = await getUserDataPromise(userId);
    const friend = await getUserDataPromise(user.friendId);
    const friendOfFriend = await getUserDataPromise(friend.friendId);
    console.log(friendOfFriend);
  } catch (err) {
    console.error(err);
  }
}

// Parallel execution with Promise.all
async function getMultipleUsers(userIds) {
  try {
    const users = await Promise.all(
      userIds.map((id) => getUserDataPromise(id))
    );
    return users;
  } catch (err) {
    console.error(err);
  }
}
```

---

### What are environment variables and how do you use them?

**Interview-style answer:**
Environment variables are key-value pairs that configure application behavior without hardcoding values. They're essential for different environments (development, production) and sensitive data like API keys.

**Explanation:**

```js
// Accessing environment variables
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;

// Setting environment variables
// Command line: NODE_ENV=production node app.js
// .env file with dotenv package
require("dotenv").config();

// .env file content:
// PORT=3000
// DATABASE_URL=mongodb://localhost:27017/myapp
// API_KEY=your-secret-key
// NODE_ENV=development

// Using in application
const express = require("express");
const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});

// Environment-specific configuration
const config = {
  development: {
    dbUrl: "mongodb://localhost:27017/myapp-dev",
    logLevel: "debug",
  },
  production: {
    dbUrl: process.env.DATABASE_URL,
    logLevel: "error",
  },
};

const env = process.env.NODE_ENV || "development";
const currentConfig = config[env];

// Security considerations
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is required");
}

// Docker environment variables
// docker run -e NODE_ENV=production -e PORT=8080 myapp
```

---

### How does libuv integrate with Node.js event loop?

**Interview-style answer:**
libuv is Node's C library handling non-blocking I/O (threads pool for DNS/FS), feeding completed callbacks to V8's event loop phases (timers→poll→check); Node bindings (fs/http) call libuv, which signals libuv loop→Node loop via epoll/kqueue.

**Explanation:**

```js
// libuv under Node: fs.readFile → libuv thread pool → callback to poll phase
const fs = require('fs'); // fs.promises uses libuv
fs.readFile('file.txt', (err, data) => {
  // Runs in poll phase after libuv completes I/O
});
setImmediate(() => console.log('check phase')); // After poll
// libuv loop runs in background thread; Node loop (JS thread) polls it
```

Trade-offs: libuv defaults 4 FS threads (UV_THREADPOOL_SIZE=128 for heavy I/O); blocks on CPU tasks.

---

### Explain Express router mounting and param middleware.

**Interview-style answer:**
Router mounting nests sub-apps (app.use('/api', router)) for modularity; param middleware runs on :id params via router.param('id', fn) before route handlers, e.g., fetch user by ID.

**Explanation:**
```js
const express = require('express');
const app = express();
const router = express.Router();

// Param middleware
router.param('id', async (req, res, next, id) => {
  req.user = await db.findUser(id); // Runs before routes with :id
  if (!req.user) return res.status(404).send('User not found');
  next();
});

// Mounting
router.get('/users/:id', (req, res) => res.json(req.user)); // param runs first
router.post('/users/:id/orders', (req, res) => { /* order for req.user */ });
app.use('/api', router); // Mounts /api/users/123
```
Trade-offs: Deep nesting hurts perf (use app-level); params skip if no handler matches.

---

# Advanced Questions

### How do you structure a mid-sized backend service in Node/TypeScript so that it stays maintainable as it grows

**Interview-style answer:**
- Layered structure: controllers, services, repositories, shared utilities, DTOs.
- Separation of concerns: no DB logic in controllers, clear boundaries.
- Error handling pattern (central error middleware or filters), standardized response format.
- Configuration management (env, config module), logging abstraction.

Trade-offs:
- Show me how you would organize a feature like ‘Call Transcript Search’ in modules/files.
- How do you keep types consistent between layers?

### What is the difference between V8 engine and Node.js?

**Interview-style answer:**
V8 is Google's JavaScript engine that compiles and executes JavaScript code. Node.js is a runtime environment that uses V8 and adds APIs for file system, networking, and other system operations.

**Explanation:**

```js
// V8 provides JavaScript execution
console.log("Hello from V8");

// Node.js adds system APIs
const fs = require("fs"); // File system
const http = require("http"); // HTTP server
const crypto = require("crypto"); // Cryptography
const os = require("os"); // Operating system

// V8 features available in Node.js
// 1. Modern JavaScript features
const asyncFunction = async () => {
  const result = await Promise.resolve("Hello");
  return result;
};

// 2. V8 optimization
function hotFunction(a, b) {
  return a + b; // Gets optimized by V8
}

// 3. Memory management
const largeArray = new Array(1000000).fill(0);
// V8's garbage collector manages memory

// Node.js specific features
// 1. Event loop
setTimeout(() => console.log("Timer"), 1000);

// 2. Process management
console.log(process.pid);
console.log(process.version);

// 3. Module system
module.exports = { myFunction };

// Architecture:
// Application Code
// ↓
// Node.js APIs (fs, http, etc.)
// ↓
// V8 Engine (JavaScript execution)
// ↓
// libuv (Event loop, I/O)
// ↓
// Operating System
```

---

### How do you implement custom streams in Node.js?

**Interview-style answer:**
Custom streams extend the built-in stream classes (Readable, Writable, Transform, Duplex). They implement specific methods and handle data flow according to your requirements.

**Explanation:**

```js
const { Readable, Writable, Transform, Duplex } = require("stream");

// Custom Readable stream
class CounterStream extends Readable {
  constructor(options) {
    super(options);
    this.count = 0;
    this.max = options.max || 10;
  }

  _read() {
    if (this.count < this.max) {
      this.push(`Count: ${this.count}\n`);
      this.count++;
    } else {
      this.push(null); // End stream
    }
  }
}

// Custom Writable stream
class LoggerStream extends Writable {
  constructor(options) {
    super(options);
    this.logFile = options.logFile || "app.log";
  }

  _write(chunk, encoding, callback) {
    console.log(`Log: ${chunk.toString()}`);
    fs.appendFile(this.logFile, chunk, callback);
  }
}

// Custom Transform stream
class UpperCaseTransform extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    const upperChunk = chunk.toString().toUpperCase();
    this.push(upperChunk);
    callback();
  }
}

// Custom Duplex stream
class EchoStream extends Duplex {
  constructor(options) {
    super(options);
    this.buffer = [];
  }

  _write(chunk, encoding, callback) {
    this.buffer.push(chunk);
    callback();
  }

  _read() {
    if (this.buffer.length > 0) {
      this.push(this.buffer.shift());
    }
  }
}

// Usage
const counter = new CounterStream({ max: 5 });
const logger = new LoggerStream();
const upperCase = new UpperCaseTransform();

counter.pipe(upperCase).pipe(logger);

// Custom stream with backpressure
class ThrottleStream extends Transform {
  constructor(options) {
    super(options);
    this.rate = options.rate || 1000; // bytes per second
    this.lastTime = Date.now();
    this.bytesWritten = 0;
  }

  _transform(chunk, encoding, callback) {
    const now = Date.now();
    const timeDiff = now - this.lastTime;
    const maxBytes = (timeDiff / 1000) * this.rate;

    if (this.bytesWritten < maxBytes) {
      this.push(chunk);
      this.bytesWritten += chunk.length;
    } else {
      // Implement backpressure
      setTimeout(() => {
        this.push(chunk);
        this.bytesWritten = 0;
        this.lastTime = Date.now();
        callback();
      }, 100);
    }
  }
}
```
---

### Common security vulns (XSS/CSRF/injection) & mitigations (helmet, sanitize-html, rate-limiter).
**Interview-style answer:**

**Explanation:**

```js
```

---

### Input validation (Joi/Zod schemas) & sanitization.
**Interview-style answer:**

**Explanation:**

```js
```

---

### JWT vs sessions: Implement refresh tokens, blacklist.

**Interview-style answer:**

**Explanation:**

```js
```
---

### What is the difference between worker_threads and child_process?

**Interview-style answer:**
`worker_threads` run JavaScript in separate threads within the same process, sharing memory through SharedArrayBuffer. `child_process` creates separate processes with their own memory space and communicate through IPC.

**Explanation:**

```js
// worker_threads - Shared memory, same process
const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  // Main thread
  const worker = new Worker(__filename, {
    workerData: { start: 0, end: 1000000 },
  });

  worker.on("message", (result) => {
    console.log("Result from worker:", result);
  });

  worker.on("error", (err) => {
    console.error("Worker error:", err);
  });
} else {
  // Worker thread
  const { start, end } = workerData;
  let sum = 0;

  for (let i = start; i < end; i++) {
    sum += i;
  }

  parentPort.postMessage(sum);
}

// child_process - Separate process, IPC communication
const { fork } = require("child_process");

const child = fork("./child-process.js");

child.send({ message: "Hello from parent" });

child.on("message", (msg) => {
  console.log("Message from child:", msg);
});

child.on("exit", (code) => {
  console.log(`Child process exited with code ${code}`);
});

// child-process.js
process.on("message", (msg) => {
  console.log("Message from parent:", msg);
  process.send({ message: "Hello from child" });
});

// Key differences:
// worker_threads: Shared memory, faster communication, same process
// child_process: Isolated memory, slower communication, separate process
// Use worker_threads for CPU-intensive tasks
// Use child_process for isolation and fault tolerance
```

---

### How do you implement caching strategies in Node.js?

**Interview-style answer:**
Caching strategies include in-memory caching, Redis, and CDN. Choose based on data type, size, and access patterns. Implement cache invalidation, TTL, and fallback mechanisms.

**Explanation:**

```js
// In-memory caching
class MemoryCache {
  constructor(ttl = 300000) {
    // 5 minutes default
    this.cache = new Map();
    this.ttl = ttl;
  }

  set(key, value, customTtl) {
    const expiry = Date.now() + (customTtl || this.ttl);
    this.cache.set(key, { value, expiry });
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  delete(key) {
    this.cache.delete(key);
  }

  clear() {
    this.cache.clear();
  }
}

// Redis caching
const redis = require("redis");
const client = redis.createClient();

class RedisCache {
  async set(key, value, ttl = 300) {
    await client.setex(key, ttl, JSON.stringify(value));
  }

  async get(key) {
    const value = await client.get(key);
    return value ? JSON.parse(value) : null;
  }

  async delete(key) {
    await client.del(key);
  }
}

// Cache middleware for Express
function cacheMiddleware(ttl = 300) {
  const cache = new MemoryCache(ttl * 1000);

  return (req, res, next) => {
    const key = req.originalUrl;
    const cached = cache.get(key);

    if (cached) {
      return res.json(cached);
    }

    const originalSend = res.json;
    res.json = function (data) {
      cache.set(key, data);
      originalSend.call(this, data);
    };

    next();
  };
}

// Cache strategies
// 1. Cache-aside
async function getProduct(id) {
  let product = cache.get(`product:${id}`);
  if (!product) {
    product = await database.getProduct(id);
    cache.set(`product:${id}`, product);
  }
  return product;
}

// 2. Write-through
async function updateProduct(id, data) {
  await database.updateProduct(id, data);
  cache.set(`product:${id}`, data);
}

// 3. Write-behind
async function updateProduct(id, data) {
  cache.set(`product:${id}`, data);
  // Update database asynchronously
  setImmediate(() => database.updateProduct(id, data));
}

// Cache invalidation
function invalidateUserCache(userId) {
  cache.delete(`user:${userId}`);
  cache.delete(`user:${userId}:profile`);
  cache.delete(`user:${userId}:settings`);
}
```

---

### What is the difference between memory leaks and performance issues in Node.js?

**Interview-style answer:**
Memory leaks occur when memory isn't released properly, causing gradual memory consumption increase. Performance issues involve slow execution, high CPU usage, or inefficient algorithms. Both require different debugging approaches.

**Explanation:**

```js
// Memory leak examples
// 1. Unclosed event listeners
const EventEmitter = require('events');
const emitter = new EventEmitter();

function createListener() {
  emitter.on('data', (data) => {
    console.log(data);
  });
  // Never removes listener - memory leak!
```

# Senior Level Question

### System design: URL shortener (1M writes/sec) or chat app (WebSockets + Redis). Trade-offs?

**Interview-style answer:**

**Explanation:**

```js
```
---

### Design Rate Limiter (Fixed Window, Token Bucket)

**Interview-style answer:**

**Explanation:**

```js
```
---
---

### Chat App Trade-offs (URL Covered)

**Interview-style answer:**

**Explanation:**

```js
```
---

### Scaling: Horizontal (NGINX load balancer + sticky sessions); circuit breakers (Opossum).

**Interview-style answer:**

**Explanation:**

```js
```

### Microservices: gRPC vs REST; service mesh (Istio).

**Interview-style answer:**

**Explanation:**

```js
```

### Deployment: PM2 vs Docker Compose; Kubernetes manifests for Node app; blue-green deploys.

**Interview-style answer:**

**Explanation:**

```js
```

### Security Vulnerabilities & Mitigations ***OWASP** Top 10*

**Interview-style answer:**

**Explanation:**

```js
```
