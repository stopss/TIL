const arr = [1, 2, 3, 1, 2];

// 배열 array 에서 모든 item 요소를 제거
function removeAll(array, item) {
    return array.filter(v => v !== item);
}

console.log(removeAll(arr, 2)); // 