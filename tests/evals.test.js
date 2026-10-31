// Runs every case in evals/cases.json and reports how many were classified correctly.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { scoreBusiness } from '../src/score.js';

const cases = JSON.parse(readFileSync(new URL('../evals/cases.json', import.meta.url), 'utf8'));

test('evals: every example business gets the expected stage', () => {
  const misses = cases
    .map((c) => ({ ...c, got: scoreBusiness(c.answers) }))
    .filter((c) => c.got.stage !== c.expected);

  const passed = cases.length - misses.length;
  console.log(`evals: ${passed}/${cases.length} correct`);
  for (const m of misses) {
    console.log(`  miss: ${m.name} -> got ${m.got.stage} (${m.got.total}), expected ${m.expected}`);
  }
  assert.equal(misses.length, 0);
});
