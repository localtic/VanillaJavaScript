alert("I'm worth it!");
console.log("I'm worth it!");

function sayHello(){
    console.log("Hello");
}

sayHello();

// 함수는 인자(argument)를 받는다
// 인자는 변수라고 생각하면 됨
// + 하면 띄어쓰기 없음
function sayHello(name, age){
    console.log("Hello", name, "you are", age, "years old");
    console.log(`Hello ${name} you are ${age} years old`);
}

sayHello("Hyeon", 20);

// greetHyeon은 return값과 같다
const greetHyeon = sayHello("Hyeon", 20)
console.log(greetHyeon)

// 함수 안에 기능을 구현해야 함
const calculator = {
    plus: function(a, b){
        return a + b;
    }
}

const plus = calculator.plus(5, 5)
console.log(plus)