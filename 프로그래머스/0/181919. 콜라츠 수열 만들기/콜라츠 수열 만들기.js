function solution(n) {
    const result = [n]; // 수열의 시작은 n

    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        result.push(n); // 새로운 값을 수열에 추가
    }

    return result;
}
