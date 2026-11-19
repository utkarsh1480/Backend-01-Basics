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










