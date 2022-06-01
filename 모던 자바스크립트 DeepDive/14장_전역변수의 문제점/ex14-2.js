var x = 'global';

function foo() {
    console.log(x);     // local
    var x = 'local';
}

foo();
console.log(x);     // global