// ============================================================================
// NODE.JS INTERVIEW PRACTICE PROBLEMS
// ============================================================================
// Run with: ts-node sandbox.ts

import * as fs from 'fs';
import * as path from 'path';
import { EventEmitter } from 'events';
import * as http from 'http';
import { Transform } from 'stream';

/*
 * ============================================================================
 * Problem 1: Asynchronous Control Flow (Parallel Execution)
 * ============================================================================
 * Task: Implement `readFiles` to read an array of file paths in parallel.
 * - Return the contents in the SAME order as the input paths.
 * - If ANY file fails, callback with the error immediately.
 * - Do NOT use fs.promises or async/await (use raw callbacks to demonstrate understanding).
 */

function readFiles(filePaths: string[], callback: (err: Error | null, contents?: string[]) => void) {
  let files = filePaths.length;
  if(files === 0) return callback(new Error("no files to parse"));

  let hasError = false;
  let contents = Array(files);
  let count = 0;

  filePaths.forEach((path, index) => {
    fs.readFile(path, (err, data) => {
      if(hasError) return;

      // If ANY file fails, callback with the error immediately.
      if(err) {
        hasError = true;
        callback(err);
      }

      contents[index] = data;
      count++;

      if(count === files) {
        return callback(null, contents);
      }
    })
  })
}


/*
 * ============================================================================
 * Problem 2: Event Emitters
 * ============================================================================
 * Task: Create a `CountDown` class that extends EventEmitter.
 * - It should take a number `seconds` in the constructor.
 * - It should emit 'tick' every second with the remaining time.
 * - It should emit 'end' when it reaches 0.
 */

class CountDown extends EventEmitter {
  seconds: number;
  intervalId: NodeJS.Timeout;
  constructor(seconds: number){
    super()
    this.seconds = seconds;
    this.intervalId = setInterval(() => {
      this.seconds--;
      this.emit('tick', this.seconds);

      if(this.seconds === 0) {
        this.emit('end', this.seconds)
        clearInterval(this.intervalId);
      }
      

    }, 1000);
  }
}


/*
 * ============================================================================
 * Problem 3: HTTP Server & Routing
 * ============================================================================
 * Task: Create a vanilla HTTP server (no Express).
 * - GET /users : Return JSON { users: ['Alice', 'Bob'] }
 * - POST /users : Read the body (assume JSON), parse it, and log it. Return 201.
 * - 404 for anything else.
 */

const server = http.createServer((req, res) => {
  // TODO: Implement routing and body parsing
  if(req.method === 'GET' && req.url === '/users') {
    return res.end(JSON.stringify({ users: ['Alice', 'Bob'] }))
  }

  if(req.method === 'POST' && req.url === '/users') {
    let body = '';
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(body)
      res.end('201')
    })
  }

  res.end('404')
});


/*
 * ============================================================================
 * Problem 4: Streams (Transform)
 * ============================================================================
 * Task: Create a Transform stream class `UpperCaseStream`.
 * - It should take input chunks (strings/buffers) and convert them to Uppercase.
 *
 * Example: fs.createReadStream('input.txt').pipe(new UpperCaseStream()).pipe(process.stdout);
 */

class UpperCaseStream extends Transform {
  _transform(chunk: any, encoding: string, callback: Function) {
    // TODO: Implement the transformation logic
    
  }
}


/*
 * ============================================================================
 * Problem 5: Middleware Pattern (Logic)
 * ============================================================================
 * Task: Implement a simple middleware runner.
 * - `runMiddlewares` takes a `req`, `res`, and an array of functions.
 * - Each function has signature (req, res, next).
 * - `next()` calls the next middleware.
 * - If `next` is not called, execution stops.
 */

type Middleware = (req: any, res: any, next: () => void) => void;

function runMiddlewares(req: any, res: any, middlewares: Middleware[]) {
  // TODO: Implement the recursion/loop to run middlewares in order
}

// ============================================================================
// TEST AREA (Uncomment to test specific problems)
// ============================================================================

// Problem 1 Test
// readFiles(['index.js', 'tsconfig.json', 'fakeFile.ts'], (err, contents) => {
//   if (err) {
//     console.error('An error occurred:', err.message);
//     return;
//   }
//   console.log('All files read successfully, in order:');
//   console.log(contents?.length); // Should be an array with file contents in original order
// });

// Problem 2 Test
const timer = new CountDown(3);
timer.on('tick', (t) => console.log('Tick:', t));
timer.on('end', () => console.log('Boom!'));

// Problem 3 Test
// server.listen(3000, () => console.log('Server on 3000'));

// Problem 4 Test
// const upper = new UpperCaseStream();
// upper.pipe(process.stdout);
// upper.write('hello world\n');

// Problem 5 Test
// runMiddlewares({}, {}, [
//   (req, res, next) => { console.log('1'); next(); },
//   (req, res, next) => { console.log('2'); }
// ]);
