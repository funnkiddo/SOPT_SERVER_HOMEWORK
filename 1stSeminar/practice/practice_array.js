var arr1 = [];
console.log(arr1);
console.log(typeof arr1); //배열의 타입은 객체 

var arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
console.log(typeof arr2);

var arr3 = ['윤희성', 3, 4.5, false, {name: 'heesung', part: 'server'}];
console.log(arr3);
console.log(typeof arr3);

// array 기본 함수
console.log('[array 기본 함수]')
var arr = [1,2,3,4,5];
var tmp = [];

// 1. length 함수
console.log('length: ' + arr.length); //배열의 길이를 반환

// 2. shift 함수
arr.unshift(0);//원래있던 배열을 오른쪽으로 이동  //비어있는 첫번쨰 요소에 0을 넣겠다
console.log('after unshift: ' + arr);
arr = [1, 2, 3, 4, 5];
arr.shift();//원래있던 배열을 왼쪽으로 이동 
console.log('after shift: ' + arr);
arr = [1, 2, 3, 4, 5];

// 3. push & pop 함수
arr.push('new Item');
console.log('after push: ' + arr);
arr.pop();//넣은 순서대로 pop 
console.log('after pop: ' + arr);

// 4. includes 함수
console.log('includes(4): ' + arr.includes(4));

// 5. indexOf 함수
console.log('indexOf: ' + arr.indexOf(4)); //4라는 값이 몇번째에 위치하고 있는지 

// 6. concat 함수
var arr1 = [1, 2, 3];
var arr2 = [4, 5];
console.log('after concat' + arr1.concat(arr2)); //arr1 뒤에 arr2의 결과를 합치는 함수 

// 7. join 함수
var arrStation = ['온수','역곡','소사','부천','중동','송내'];
console.log(arrStation.join('->')); //배열에 있는 내용 사이에 특정 스트링값을 넣을 수 있는 함수 

// 8. reverse 함수
console.log(arrStation.reverse().join('->'));//배열을 거꾸로 저장하는 함수 

// 9. sort 함수
console.log(arrStation.sort()); //알파벳순서대로 정렬 //내림차순은 sort() 다음에 reverse()

// 배열 순회
arr = [1, 2, , 4, 5];
for(var i = 0; i < arr.length; i++){ 
    console.log(arr[i]); //1 2 undefined 4 5
}

for(var idx in arr){ //for in 구문 
    console.log(arr[idx]); //1 2 4 5
}

for(var data of arr){ //값 자체를 변수에 집어넣게 됨 
    console.log(data); //
}