'use strict';

const relayClient = require('..');
const assert = require('assert').strict;

assert.strictEqual(relayClient(), 'Hello from relayClient');
console.info('relayClient tests passed');
