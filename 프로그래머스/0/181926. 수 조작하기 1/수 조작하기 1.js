function solution(n, control) {
    const move = { w: 1, s: -1, d: 10, a: -10 };
    return [...control].reduce((acc, cur) => acc + move[cur], n);
}
