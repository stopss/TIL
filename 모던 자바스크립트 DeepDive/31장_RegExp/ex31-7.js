const target = 'Is this all there is?';

const regExp1 = /is/;
target.match(regExp1);    
// -> [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

const regExp2  = /is/g;
target.match(regExp2); // -> [ 'is', 'is' ]
