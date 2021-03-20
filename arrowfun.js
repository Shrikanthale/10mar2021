//cc()
//function cc(){
  //  console.log(4)
//}

//var hi = function(message){
  //  console.log(message)  2nd way
//}

/*
hi= (message) => {console.log(message+" hiiii")}
hi("shriiiii")    //3rd way
*/
/*
hi= (message) => console.log(message+" hiiii")
hi("shriiiii") //4th way
*/
/*   5th way
hi= message => {console.log(message+" hiiii")}
hi("shriiiii")
*/

function hi(message){
    console.log(message)
    return "hi"
}
var mess=hi("world")
console.log(mess)