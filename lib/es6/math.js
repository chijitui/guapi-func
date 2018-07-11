function log(base, x) {
    return Math.log(x) / Math.log(base);
}
function isPrame(input) {
    if (input < 1)
        return false;
    for (var i = 2; i < input; i++) {
        if (input % i === 0)
            return false;
    }
    return true;
}
function fib(input) {
    return (input + 1) * input / 2;
}
export default {
    log: log,
    isPrame: isPrame,
    fib: fib
};
//# sourceMappingURL=math.js.map