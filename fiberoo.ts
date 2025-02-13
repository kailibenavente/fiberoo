function fib(): number[] {
  const fibSeq: number [] = [0, 1];
  for (let i = 1; i < 50; i++) {
    fibSeq.push(fibSeq[i - 1] + fibSeq[i]);
  }
  return fibSeq;
}

console.log(fib());

function numsToStrings(arr: number[]): string[] {
  return arr.map((element) => (element.toString()));
}

console.log(numsToStrings(fib()));

function numEvenNums(arr: number[]): number {
  const isEven = arr.filter((element) => ((element % 2) === 0));
  return isEven.length;
}

console.log(numEvenNums(fib()));
