const target = 'Aa Bb 12,345 _$%&';

let regExp = /[\w,]+/g;
console.log(target.match(regExp));  // -> [ 'Aa', 'Bb', '12,345', '_' ]

regExp = /[\W,]+/g;
console.log(target.match(regExp));  // -> [ ' ', ' ', ',', ' ', '$%&' ]