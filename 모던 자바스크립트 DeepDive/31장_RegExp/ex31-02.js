const target = 'Is this all there is?';

// 패턴 : is
// 플래그 : i -> 대소문자 구별없이 검색
const regExp = /is/i;

// test 메서드는 target 문자열에 대해 
// 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를 true/false 값으로 반환
regExp.test(target);    // -> true