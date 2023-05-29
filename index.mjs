// @ts-check
'use strict';

/**
 * A class representing a pausable loop.
 */
export default class Pausable {
    /**
     * Creates an instance of Pausable.
     * @param {Function} loopFunction - The async function to be executed in a loop.
     */
    constructor(loopFunction) {
      this.loopFunction = loopFunction;
      this.isRunning = false;
    }
  
    /**
     * Runs the pausable loop.
     * @throws {Error} Throws an error if the pausable function is already running.
     */
    async start() {
      if (this.isRunning) {
        throw new Error('Pausable function is already running.');
      }
  
      this.isRunning = true;
  
      do {
        await this.loopFunction();
      } while (this.isRunning);
    }
  
    /**
     * Stops the pausable loop.
     */
    stop() {
      this.isRunning = false;
    }
}
