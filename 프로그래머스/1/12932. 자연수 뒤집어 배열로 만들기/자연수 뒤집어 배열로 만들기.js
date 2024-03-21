// function solution(n) {
//     let answer = [];
//     let nString = String(n).split('').reverse();
    
//     nString.forEach((element) => {
//         answer.push(parseInt(element))
//     });
//     return answer;
// }     
function solution(n) {

    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}
                    