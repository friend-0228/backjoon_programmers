function solution(sides) {
    var answer = 0;
    // sides 를 계산하기 쉽게 오름차순으로 정렬해줍니다.
    sides.sort(function(a, b)  {
        return a - b;
    });
    
    // 깔쌈하게 한 번 확인 해준 뒤(안될 땐 정말 무섭습니다.)
    console.log(sides);
    
    // for 문으로 i 를 sides 배열 총 갯수만큼 차차 차차차 증가시켜줍니다.
    for(let i=0; i<sides.length; i++){
        // if 문을 사용해 sides[2]와 sides[0] + sides[1]의 값이 같을 때
        if(sides[2] >= sides[0] + sides[1]){
            // answer 에 2를 대입
            answer = 2;
        // 그게 아니라면
        } else {
            // answer 에 1 을 대입해줍니다.
            answer = 1;
        }
    }
    return answer;
}