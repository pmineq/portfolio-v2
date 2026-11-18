/** Bound elapsed time after a suspended tab and clamp pointer movement at its target. */
export function getMovementStep(speed: number, delta: number, remaining = Infinity): number {
  return Math.min(speed * Math.min(Math.max(delta, 0), 0.05), remaining);
}
