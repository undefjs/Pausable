# Pausable

```js
// Import the Pausable class
import Pausable from './Pausable';

// Define an async function to be executed in a loop
async function loopFunction() {
  console.log('Looping...');
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
}

// Create an instance of the Pausable class with the loopFunction
const pausableLoop = new Pausable(loopFunction);

// Start the pausable loop
pausableLoop.start();

// After 5 seconds, stop the pausable loop
setTimeout(() => {
  pausableLoop.stop();
  console.log('Pausable loop stopped.');
}, 5000);
```
