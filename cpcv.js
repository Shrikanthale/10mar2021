// copy by value and copy by reference
// using function as a constructor
//class in js
// object destrustingy
/*
class mobile {
    constructor(size,name,color,mic){
        this.size=size
        this.name=name
        this.color=color
        this.mic=mic
    }
    details(){
        console.log(this.size)
        console.log(this.name)
        console.log(this.color)
        console.log(this.mic)
    }
}
getcall(caliingFunc){
    return this.size+" "+color
}
}

var mobile1= new mobile (6,"samsung","black","yes")
console.log(mobile.name)
*/

/*
var a = 10 
var b = a 
var a = 11
console.log(a)
console.log(b)


var x = 40 
var y = x 
x = 50 
console.log(x)
console.log(y)
*/

var x = 40 
var y = x 
var z = y
x=50
console.log(x)
console.log(y)
console.log(z)
