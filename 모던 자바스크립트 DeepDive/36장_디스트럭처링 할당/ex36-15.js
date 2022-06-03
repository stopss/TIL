const user = {firstName: 'Ungmo', lastName: 'Lee'};

// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이뤄진다.
const {lastName: ln, firstName: fn} = user;
console.log(fn, ln);    //