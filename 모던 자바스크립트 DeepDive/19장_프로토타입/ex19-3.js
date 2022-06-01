// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
        // Math.PI는 원주율을 나타내는 상수다.
        return Math.PI * this.radius ** 2;
    };
}

// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea);   // False

console.log(circle1.getArea())      // 3.14159...
console.log(circle2.getArea())      // 12.5666...