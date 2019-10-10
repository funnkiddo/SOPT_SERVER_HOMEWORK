// 함수 선언식
console.log('[함수 선언식]');
function addDeclare(a, b){
    return a + b;
}
console.log(addDeclare);
console.log(typeof addDeclare);
console.log(addDeclare.__proto__);
//함수 실행하는 방법 
//addDeclare(1,4)

// 함수 표현식
console.log('[함수 표현식]');
var addExpr = function(a, b){
    return a + b;
}
console.log(addExpr);
console.log(typeof addExpr);

// arrow function 
console.log('[화살표 함수]'); 
var addArrow = (a, b) => { return a + b; };
console.log(addArrow);
console.log(typeof addArrow);
console.log(addArrow(10,5));

workHoisting();//선언을 하기 전에 앞에서 실행을 할 수 있음
try{
    nowWorkHoisting(); // occur Error //함수 표현식으로 선언했기 때문에 실행할 때 에러가 발생 
}catch(err){
    console.log(err.name + ': ' + err.message);
}
function workHoisting(){ //함수 선언식으로 선언 
    console.log('hoist work');
}
var nowWorkHoisting = function(){ //함수 표현식으로 선언 
    console.log('hoist work');
}

// 함수를 파라미터로 가지고, 함수를 반환하는 예제 //1급 객체 
var add = function(a, b){ return a + b; };
var double = function(a){ return a * 2; };

var doubleSum = function(arr){
    return function(){ //함수의 반환을  '함수'로
        return arr.map(double).reduce(add); //map은 각각의 요소에 적용하는 함수 
    };
}
var arr = [1, 2, 3, 4, 5];
var result = doubleSum(arr)();
console.log(result);