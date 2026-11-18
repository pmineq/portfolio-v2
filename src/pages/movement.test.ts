import { getMovementStep } from './movement';

test('keyboard movement covers the same distance at 60 and 120 Hz', () => {
  const distanceAt60Hz = Array.from({ length: 60 }, () => getMovementStep(4.8, 1 / 60))
    .reduce((sum, step) => sum + step, 0);
  const distanceAt120Hz = Array.from({ length: 120 }, () => getMovementStep(4.8, 1 / 120))
    .reduce((sum, step) => sum + step, 0);
  expect(distanceAt60Hz).toBeCloseTo(4.8);
  expect(distanceAt120Hz).toBeCloseTo(4.8);
});

test('pointer movement stops at its destination rather than overshooting', () => {
  expect(getMovementStep(3, 1 / 60, 0.01)).toBe(0.01);
});

test('resuming a backgrounded tab cannot move a character across the scene', () => {
  expect(getMovementStep(4.8, 10)).toBeCloseTo(0.24);
});
