/*var http = require("http")
function myfun(request,response){
     console.log("my got started here")
     response.writeHead(200,{"content-type" : "text\plain"})
     response.write("hello world")
     response.end()
}
http.createServer(myfun).listen(8888)
*/



var http = require("http")
function login(request,response){
    console.log("creating app wait for some while")
    response.writeHead(200,{"content-type" : "text\plain"})
    response.write("heyyy dear")
    response.end() 
}
http.createServer(login).listen(2000)

