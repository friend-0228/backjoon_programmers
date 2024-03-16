function solution(n) {
    let sum = 0;
    let nString = String(n).split('');
    
    nString.forEach((num) => {
        sum += parseInt(num);
    })
    return sum;
}

