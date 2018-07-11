function log(base: number, x: number): number {
  return Math.log(x) / Math.log(base)
}

function isPrame(input: number): boolean {
  if(input < 1) return false
  for(let i: number = 2; i < input; i++) {
    if(input % i === 0) return false
  }
  return true
}

function fib(input: number): number {
  return (input + 1) * input / 2
}

export default {
  log,
  isPrame,
  fib
}