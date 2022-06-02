const points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열의 오름차순 정렬. 비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬
points.sort((a, b) => a - b);
console.log(points);    // 

// 숫자 배열에서 최소/최대값 
console.log(points[0], points[points.length - 1]);  // 1 100

// 숫자 배열의 내림차순 정렬
points.sort((a, b) => b - a);
console.log(points);    // 

// 숫자 배열에서 최소/최대값
console.log(points[points.length - 1], points[0]);  // 1 100