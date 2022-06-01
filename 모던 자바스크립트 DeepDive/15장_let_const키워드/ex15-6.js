let i = 10;

function foo() {
    let i = 100;

    for (let i = 1; i < 3; i++) {
        console.log(i);     // 1 2 (블록 레벨 스코프)
    }

    console.log(i);     // 100 (함수 레벨 스코프)
}

foo()

console.log(i);     // 10 (전역 스코프)