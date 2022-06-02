// iterable 이 아닌 유사 배열 객체
const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};

// const arr = [...arrayLike]; // TypeError: arrayLike is not iterable

Array.from(arrayLike); // -> [ 1, 2, 3 ]