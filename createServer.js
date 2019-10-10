const http = require('http'); //http 모듈을 가져오는 부분 
//http 서버를 열겠다 

http.createServer((req, res)=>{ // createserver() 라는 함수 nodejs를 서버로서 작동  req= request, res = response
        console.log('get message') //logic 구현  //함수를 실행하겠다 
        res.writeHead(200, {'Content-Type': 'text/plain'}); //nodejs를 웹 브라우저에 표현하는 방식 
        res.write('Hello nodejs');
        res.end();
}).listen(3000); // 서버 대기 시작 port nunber가 3000