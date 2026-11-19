```
What is the Event Loop in JavaScript (Node.js)?
The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations without blocking the main thread.

In simple words:
The Event Loop continuously checks whether the Call Stack is empty and whether asynchronous callbacks are ready to execute. 
When the Call Stack becomes empty, it moves eligible callbacks into the Call Stack for execution.

  Node.js uses the Event Loop provided by its runtime, which is powered by libuv.

  process.nextTick() callbacks are processed through a separate next-tick queue.
Promise callbacks use the microtask queue.
These queues have priority behavior that matters when understanding Node.js execution.

What is process.nextTick() in Node.js?
process.nextTick() is a Node.js function that schedules a callback to execute immediately after the current synchronous execution finishes, 
but before the Event Loop continues to its next phase.


Why do we need process.nextTick()?
Suppose you have a function that performs some synchronous work, and you want to execute another operation just after the current code finishes.

You could use setTimeout(), but that schedules a timer callback for a later Event Loop iteration.

Node.js provides process.nextTick() for scheduling a callback sooner.

Example:
console.log("Start");

process.nextTick(() => {
    console.log("Next Tick");
});

console.log("End");

If an interviewer asks, "What is process.nextTick() and why do we use it?"

You can say:

"process.nextTick() is a Node.js API used to schedule a callback that executes immediately after the current synchronous operation completes, 
before the Event Loop proceeds to its next phase. It is useful when we want to defer a callback without waiting for another Event Loop iteration. However, 
excessive use can cause Event Loop starvation because Node.js keeps processing next-tick callbacks before continuing with other phases."


Important: Why should we avoid excessive process.nextTick()?
This is a very important backend interview question.

Consider:
function recursiveTask() {
    process.nextTick(recursiveTask);
}

recursiveTask();

setTimeout(() => {
    console.log("Timer executed");
}, 0);


What happens?

The recursive process.nextTick() keeps scheduling more next-tick callbacks.

Node.js continues processing them before allowing the Event Loop to move forward.

As a result, the timer may never get a chance to execute.

This is called Event Loop starvation.

Therefore, don't use process.nextTick() for continuous or heavy operations.

For yielding execution to a later Event Loop phase, setImmediate() is often more appropriate.
```

```
Difference between process.nextTick(), Promise, and setImmediate() in Node.js
All three are used to schedule asynchronous callbacks in Node.js, but the main difference is WHEN their callbacks execute.

```
```
how does a Promise differ from a callback?
Callbacks are just functions passed into another function to run later, no built-in success or failure state. Promises, wrap that async result and give you resolve and reject


what's the event loop's role when there's a lot of concurrent requests?

It keeps the server responsive by juggling tasks, not blocking on one request. So even under load, it can start handling the next available work. Nice pacing, you're doing great.
```

```
why JWT 
The problem: HTTP is stateless
HTTP is a stateless protocol.
It means the server doesn't automatically remember previous requests made by a client.

One solution: Send email and password every time?
We could ask the user to send their email and password with every request.


Another solution: Sessions
Before understanding JWT, let's understand traditional session-based authentication.

Here's how it works:
1. User logs in.
2. Backend verifies credentials.
3. Backend creates a session and stores it on the server.
4. Backend sends a session ID to the browser in a cookie.
5. Browser sends that session ID with future requests.
6. Backend looks up the session ID to identify the user.

Problem with this : For example, imagine you have three backend servers.
- Server 1
- Server 2
- Server 3
A user logs in through Server 1, but their next request reaches Server 2.

Server 2 must be able to access the session created by Server 1, usually through a shared session store such as Redis.


```
```

JWT Json Web Token
It is a compact, digitally signed token used to securely transmit information between a client and a server.
In authentication, JWT is commonly used to prove that a user has successfully logged in.
Imagine a user logs into your e-commerce application.
1. User enters email and password.
2. Backend verifies the credentials.
3. Backend generates a JWT.
4. Backend sends the token to the frontend.
5. Frontend sends the token with future requests.
6. Backend verifies the token and identifies the user.
This way, the user doesn't need to enter their password for every request.
Important interview point: JWT is encoded, not encrypted by default. Anyone who obtains a JWT can decode its payload. Never store passwords, secret keys or sensitive personal information inside it.

how it verify tokens
1. Backend receives the request.
2. Middleware extracts the JWT from the cookie.
3. jwt.verify() verifies its signature and expiration.
4. If valid, decoded user information is attached to req.user.
5. next() passes control to the next middleware or controller.
6. If invalid or expired, the backend returns an unauthorized response.
```










