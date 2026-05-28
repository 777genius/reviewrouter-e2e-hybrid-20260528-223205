import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateOrderTotal } from './order-total.js';

test('calculates total for quantity based orders', () => {
  assert.equal(calculateOrderTotal([{ price: 10, quantity: 2 }]), 20);
});
