function solution(num_str) {
    let answer = 0;
    
    for (let i = 0; i < num_str.length; i++) {
        answer += Number(num_str[i]);
    }
    
    return answer;
}