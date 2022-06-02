const target = 'Is this all there is?';

// is 문자열을 대소문자를 구별하여 한 번만 검색
target.match(/is/);
// -> [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// is 문자열을 대소문자를 구별하지 않고 한 번만 검색
target.match(/is/i);
// -> [ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]

// is 문자열을 대소문자를 구별하여 전역 검색
target.match(/is/g);
// -> [ 'is', 'is' ]

// is 문자열을 대소문자를 구별하지 않고 전역 검색
target.match(/is/ig);
// -> [ 'Is', 'is', 'is' ]