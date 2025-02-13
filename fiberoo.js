"use strict";
function fib() {
    const fibSeq = [0, 1];
    for (let i = 1; i < 50; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i]);
    }
    return fibSeq;
}
console.log(fib());
function numsToStrings(arr) {
    return arr.map((element) => (element.toString()));
}
console.log(numsToStrings(fib()));
function numEvenNums(arr) {
    const isEven = arr.filter((element) => ((element % 2) === 0));
    return isEven.length;
}
console.log(numEvenNums(fib()));
