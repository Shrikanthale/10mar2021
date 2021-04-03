/*console.log("start")
function login(username,password){
    returndata = function(){
        console.log("returdata call")
        return
    }
    setTimeout(returndata,1000)
    return "settimeout"
}
var result = login("josep",125)
console.log(result)
console.log("end")
*/

/*
console.log("hello")
function login(username,password){
    returendata = function(){
        console.log("ur in expression ") 
        return       
    }
    setTimeout(returendata,1000)
    return "setimeout"
}

var result = login("skanthale@gmail.com",123654789)
console.log(result)
console.log("bye")
*/

console.log("start numbering")
var s = 10 
console.log("s1 : " +s)
function Number(){
    returnnumber = function(){
        ++s
        console.log("s2 : " +s)
        return
    }
    setTimeout(returnnumber,1000)
    ++s
    console.log("s3 : "+s)
    return "end timeout"
}

var numresult = Number()
++s
console.log("s4 : "+s)
console.log(numresult)
console.log("end numbering")