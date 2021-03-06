## var 키워드로 선언한 변수의 문제점

1. 변수 중복 선언 허용
    - var 키워드로 선언한 변수는 중복 선언이 가능하다.
2. 함수 레벨 스코프
    - var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다.
    - 따라서 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역 변수가 된다.
3. 변수 호이스팅
    - var 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼 동작한다.
    - 변수 선언문 이전에 변수를 참조하는 것은 변수 호이스팅에 의해 에러를 발생시키지는 않지만 프로그램의 흐름상 가독성을 떨어뜨리고 오류를 발생시킬 여지를 남긴다.  

</br>

# let 키워드

### 1. 변수 중복 선언 금지

```jsx
var foo = 123;
var foo = 456;

let bar = 123;
let bar = 456;
```  

</br>

### 2. 블록 레벨 스코프

let 키워드로 선언한 변수는 모든 코드 블록(함수, if, for, while, try/catch)을 지역 스코프로 인정하는 **블록 레벨 스코프(block-level scope)**를 따른다.

```jsx
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
```  

</br>

### 3. 변수 호이스팅

let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.

- let 키워드로 선언한 변수는 “선언 단계”와 “초기화 단계”가 분리되어 진행된다.
- 런타임 이전에 자바스크립트 엔젠에 의해 암묵적으로 선언 단계가 번저 실행되지만 초기화 단계는 변수 선언문에 도달했을 때 실행된다.
- 초기화 단계가 실행되기 전에 변수에 접근하려고 하면 참조 에러가 발생한다.
- 스코프의 시작 지점부터 초기화 시작 지점까지 변수를 참조할 수 없는 구간을 **일시적 사각지대**(TDZ:Temporal Dead Zone)이라 부른다.

```jsx
// 런타임 이전에 선언 단계가 실행된다.
// 아직 변수가 초기화되지 않았다.
// 초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없다.
console.log(foo);   // ReferenceError: foo is not defined

let foo;    // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo);   // undefined

foo = 1;    // 할당문에서 할당 단계가 실행된다.
console.log(foo);   // 1
```  

</br>

### 4. 전역 객체와 let

let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다.  

</br>

## Const 키워드

const 키워드는 상수를 선언하기 위해 사용한다.

하지만 반드시 상수만을 위해 사용하지는 않는다.

let 키워드와 대부분 동일하다. 다른 점을 중심으로 아래에 정리했다.

### 1. 선언과 초기화

- const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.

```jsx
const foo = 1;
```

- const 키워드로 선언한 변수는 블록 레벨 스코프를 가지며, 변수 호스팅이 발생하지 않는 것처럼 동작한다.

```jsx
{
    // 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
    console.log(foo);   // ReferenceError: Cannot access 'foo' before initialization
    const foo = 1;
    console.log(foo);   // 1
}

// 블록 레벨 스코프를 갖느다.
console.log(foo);   // ReferenceError: foo is not defined
```  

</br>

### 2. 재할당 금지

var, let 키워드로 선언한 변수는 재할당이 자유로우나 const 키워드로 선언한 변수는 재할당이 금지된다.  

</br>

### 3. 상수

상수는 재할당이 금지된 변수를 말한다.

```jsx
// 세율을 의미하는 0.1은 변경할 수없는 상수로 사용된다.
const TAX_RATE = 0.1;

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

console.log(afterTaxPrice);
```  

</br>

### 4. const 키워드와 객체

const 키워드로 선언된 변수에 원시 값을 할당한 경우 값을 변경할 수 없다.

하지만 const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.

```jsx
const person = {
    name: 'Lee'
};

// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = 'Kim';

console.log(person);    // {name: "Kim"}
```

const 키워드는 재할당을 금지할 뿐 “불변”을 의미하지 않는다.  

</br>

## var, let, const

- ES6를 사용한다면 var 키워드를 사용하지 않는다.
- 재할당이 필요한 경우에 한정해 let 키워드를 사용한다. 이 때 변수의 스코프는 최대한 좁게 만든다.
- 변경이 발생하지 않고 읽기 전용으로 사용하는(재할당이 필요 없는 상수) 원시 값과 객체에는 const 키워드를 사용한다. const 키워드는 재할당을 금지하므로 var, let 키워드보다 안전하다.
