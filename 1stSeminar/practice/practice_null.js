// null는 리터럴입니다. 
console.log('foo: ' + foo); // undefined
var foo = null;
console.log('foo: ' + foo); // null
console.log('typeof foo: ' + typeof foo); // object


// null vs undefined
console.log('[null vs undefined]')
console.log('typeof null: ' + typeof null); // object (ECMAScript 의 버그로, null이어야 함) 
console.log('typeof undefined: ' + typeof undefined); // undefined 
console.log('null === undefined: ' + (null === undefined)); // false //===는 값과 자료형까지 같은지 비교 
console.log('null == undefined: ' + (null == undefined)); // true //==는 값만 같은지 비교 