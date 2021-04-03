/*function iseven(x){
    if(x%2==0){
        console.log("even number")
    }
    else{
        console.log("odd number")
    }
}

function numarr(arr){
    console.log(arr)
}

module.exports.iseven=iseven
module.exports.numarr=numarr 


function square(num){
    var num 
    console.log("square : " + num*num)
}
function cube(n){
    var n
    console.log("cube : " + n*n*n)
}
module.exports.square=square
module.exports.cube=cube
*/


class student{
    constructor(Name,lastname,id){
        this.Name = Name
        this.lastname = lastname
        this.id = id
    }
    deatile(){
        console.log(this.Name)
        console.log(this.lastname)
        console.log(this.id)
    }
    getfullname(){
        return this.Name + " " + this.lastname + " " + this.id
    }
    geteditname(newname){
        var nname = newname.split(" ")
        this.Name = nname[0]
        this.lastname = nname[1]
        this.id = nname[2] 
    }
}
module.exports = student 