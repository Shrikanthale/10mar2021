 //require("./mylib").iseven(11)
 //require("./mylib").numarr(5,10)

//var result = require("./mylib")
//result.square(5)
//result.cube(3)

var student = require("./mylib")

var s1 = new student("ash","ravi",87)
//console.log(s1.student)
//console.log(s1.deatile())

console.log(s1.getfullname())
s1.geteditname("narendra modi 65")
console.log(s1.getfullname())