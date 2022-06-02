const target = 'color colour';

// 'colr' 다음 'u'가 최대 한 번(0번 포함) 이상 반복되고
// 'r'로 이어지는 문자열 'color', 'colour'를 전역 검색
const regExp = /colou?r/g;
target.match(regExp);  // -> [ 'color', 'colour' ]