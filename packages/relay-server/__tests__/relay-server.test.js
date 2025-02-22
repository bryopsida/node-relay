'use strict';

const relayServer = require('..');
const assert = require('assert').strict;

assert.strictEqual(relayServer(), 'Hello from relayServer');
console.info('relayServer tests passed');
