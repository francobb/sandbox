import { test, mock } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
// const { spawn } = require('node:child_process');


mock.method(fs, 'readFile', async () => "Hello World!");
test('synchronous passing test', async (t) => {
    // This test passes because it does not throw an exception.
    add("hello world", 4);
    assert.strictEqual(await fs.readFile('a.txt'), "Hello World");
});

// @ts-check
/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
    return a + b
}

