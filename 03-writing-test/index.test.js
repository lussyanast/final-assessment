import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Hasil penjumlahan dari dua nilai positif', () => {
    assert.strictEqual(sum(1, 9), 10);
});

test('Hasil penjumlahan dari salah satu nilai negatif', () => {
    assert.strictEqual(sum(8, -3), 5);
});

test('Hasil penjumlahan dari nilai yang bernilai 0', () => {
    assert.strictEqual(sum(0, 0), 0);
});

test('Hasil penjumlahan dari dua nilai yang bernilai negatif', () => {
    assert.strictEqual(sum(-10, -10), -20);
});