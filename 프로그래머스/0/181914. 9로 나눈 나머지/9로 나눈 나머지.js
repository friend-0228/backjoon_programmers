function solution(number) {
    let sum = number.split('').reduce((acc, curr) => acc+Number(curr), 0);
    return sum%9;
}