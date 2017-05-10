var http = require('http');

http.createServer(function (request, response) {
	var html = '<html>'  
        +'<head>'  
        +'<title>nodejs</title>'  
        +'</head>'  
        +'<body>'  
        +   'hello world! 12345'  
        +'</body>'  
        +'</html>';  

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(html);
	// 发送响应数据 "Hello World"
	response.end();
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');