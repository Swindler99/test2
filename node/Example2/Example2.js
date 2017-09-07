var http=require("http");
var url=require("url");
var fs=require("fs");

http.createServer(server).listen(8000);
console.log("您访问的事:http://localhost:8000");

function server(req,resp){
	var urlObject=url.parse(req.url);
	var pathname=urlObject.pathname;
	if(pathname=="/favicon.ico"){
		return;
	}else if(pathname=="/reg"){
		console.log(url.parse(req.url).query);
		var params=querystring.parse(url.parse(req.url).query);
		console.log(params.account+","+params.password);
	}else{
		fs.readFile(__dirname+pathname,function(err,data){
			resp.write(data);
			resp.end();
		});
	}
}
