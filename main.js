// // task_1
function calc(x,y,z,h,d,f,g,k,u,w) {
    return x,y,z,h,d,f,g,k,u,w / 8 ;
}
console.log(calc(2,3,4,5,8,9,7,4,2,3));

// task_2 
var base = 10; 
var height = 30;
var araa = (base*height)/2;
function Araa() {
    return araa;
}
console.log(Araa());

// task_3
function days(age) {

    return age * 365;
}
console.log(days(19));

// task_4

var x = 10;
var y = 5;
var z = x + y ;
function sum () {
    return z;
}
console.log(sum());

// task_5

var names = ["hady", "ali","mohamed","mahmoud","abdo","ahmed"]
function Names() {
    return names[0];
}
console.log(Names());

// task_6

var fname = "Hady Ali Mohamed"
function name() {
    return fname;
}
document.getElementById("hady").innerHTML = fname ;

// task_7

var sccond = 60 * 60 + "s";
function hours() {
    return sccond ;
}
console.log(hours(8));

// task_8

function sum(){
    var h = 50 + 150 + 150 + 100;
    if (h>350){
        document.getElementById("hady").innerHTML = "true";
    } else {
        document.getElementById("hady").innerHTML = "false";
    }
}
sum();

// task_9

var x = 10;
function number(){
    if (x==0){
        document.getElementById("hady").innerHTML = "true";
    } else{
        document.getElementById("hady").innerHTML = "false";
    }
}
number()

// task_10
var x = 10 ;
var y = 5 ;
var z = (x + y) % 2 ;
function number(){
    return z;
}
console.log(number());

// task_11

var x = 10 ;
var y = 10 ;
function number() {
    if( x > y ){
        document.getElementById("hady").innerHTML = "x is larg y !"
    } else if( x < y ){
        document.getElementById("hady").innerHTML = "y is larg x !"
    } else {
        document.getElementById("hady").innerHTML = "x and y are equal!"
    }

}
number() 

// task_12

var x = 10 ;
var name = "hady" ;
function number() {
    if (x == number){
        document.getElementById("hady").innerHTML = "this is a number"
    }
    else {
        document.getElementById("hady").innerHTML = "this is a name"
    }

}
number()

// task_13

