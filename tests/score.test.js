import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scoreBusiness, stageForTotal, stageForAverage } from '../src/score.js';

const all = (v) => ({
  strategy: [v, v, v, v],
  management: [v, v, v, v],
  systems: [v, v, v, v],
  people: [v, v, v, v],
  finance: [v, v, v, v],
});

test('lowest and highest possible scores', () => {
  assert.equal(scoreBusiness(all(1)).total, 20);
  assert.equal(scoreBusiness(all(1)).stage, 'firefighter');
  assert.equal(scoreBusiness(all(3)).total, 60);
  assert.equal(scoreBusiness(all(3)).stage, 'inspector');
});

test('total score boundaries between stages', () => {
  assert.equal(stageForTotal(33), 'firefighter');
  assert.equal(stageForTotal(34), 'builder');
  assert.equal(stageForTotal(46), 'builder');
  assert.equal(stageForTotal(47), 'inspector');
});

test('domain average boundaries between stages', () => {
  assert.equal(stageForAverage(1.6), 'firefighter');
  assert.equal(stageForAverage(1.7), 'builder');
  assert.equal(stageForAverage(2.3), 'builder');
  assert.equal(stageForAverage(2.4), 'inspector');
});

test('each domain gets its own stage', () => {
  const r = scoreBusiness({ ...all(2), finance: [3, 3, 3, 3], systems: [1, 1, 1, 1] });
  const byId = Object.fromEntries(r.domains.map((d) => [d.id, d.stage]));
  assert.equal(byId.finance, 'inspector');
  assert.equal(byId.systems, 'firefighter');
  assert.equal(byId.strategy, 'builder');
});

test('rejects missing or invalid answers', () => {
  assert.throws(() => scoreBusiness({ ...all(2), people: [2, 2, 2] }), /needs 4 answers/);
  assert.throws(() => scoreBusiness({ ...all(2), finance: [2, 2, 2, 4] }), /must be 1, 2 or 3/);
  assert.throws(() => scoreBusiness(undefined), /needs 4 answers/);
});
