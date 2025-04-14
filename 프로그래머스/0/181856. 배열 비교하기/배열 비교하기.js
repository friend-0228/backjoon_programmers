function solution(arr1, arr2) {
    
    // 각 배열의 총합을 구한다.
    const num1  = arr1.reduce((a,b) => a += b);
    const num2  = arr2.reduce((a,b) => a += b);
    
    // 첫번째 길이 비교 후 길이가 같을 경우 합계를 비교한다.
    return arr1.length > arr2.length ? 1 : arr1.length < arr2.length ? -1 : (num1 > num2 ? 1 : (num1 < num2 ? -1 : 0));
}