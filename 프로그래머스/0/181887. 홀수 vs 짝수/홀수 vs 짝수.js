function solution(num_list) {
    const { oddSum, evenSum } = num_list.reduce((acc,curr,index) => {
        if(index%2===0) {
            acc.oddSum += curr;
    } else {
        acc.evenSum += curr;
    }
    return acc;
}, { oddSum: 0, evenSum: 0 });
return Math.max(oddSum, evenSum);
}
