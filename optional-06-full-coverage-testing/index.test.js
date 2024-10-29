import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('Penjumlahan menghasilkan 0 jika salah satu argument bukanlah nomor', () => {
    assert.strictEqual(sum('x', 2), 0);
});

test('Penjumlahan menghasilkan 0 jika kedua argument bukanlah nomor', () => {
    assert.strictEqual(sum('x', 'y'), 0);
});

test('Penjumlahan menghasilkan 0 jika salah satu argument bernilai negatif', () => {
    assert.strictEqual(sum(-5, 17), 0);
});

test('Penjumlahan menghasilkan 0 jika kedua argument bernilai negatif', () => {
    assert.strictEqual(sum(-1, -1), 0);
});

test('Penjumlahan menghasilkan nilai jika argument bernilai positif', () => {
    assert.strictEqual(sum(5, 5), 10);
});

test('Penjumlahan menghasilkan 0 jika kedua argument bernilai 0', () => {
    assert.strictEqual(sum(0, 0), 0);
});