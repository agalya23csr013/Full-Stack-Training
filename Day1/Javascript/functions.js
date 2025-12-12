
let UserDetails=function(name,password){
    console.log("Hello");
    console.log(`Username:${name},password:${password}`);
}
UserDetails("user1", "pass123");//actual parameters


// Function with return types

 let UserDetails1=function(name,password){  //read right to left
    console.log("Hello");
    console.log(`Username:${name},password:${password}`);
    return [10,20,3,0];
 //it will take only first return value and ignore rest of the return statements
    return {
        name:"Ashifa",
        password:"1234"
    };
    return 10;
    return "hello";
    return null;
    return undefined;
    return function(){
    }
}
console.log(UserDetails1("user1", "pass123"));//actual parameters


let fun=UserDetails1("user2", "pass456");
console.log(fun);



//Named Function or normal function
function getuserdetails(){
    console.log("This is normal function....");
    return 'user details get successfully';
}

console.log(getuserdetails());
console.log(getuserdetails());
console.log(getuserdetails());
console.log(getuserdetails());


function getuserdetails(){
    console.log("This is normal function....");
    return 'user details get successfully';
}

console.log(getuserdetails());


//immediate invoking function//it will call only one time like () not () ()

(function(username,password){
    console.log(username,password)
    console.log("hello function");
    return username,password; // return is not work
})("admin","admin@123"); 


//arrow function - to reduce the syntax for the function

let arrowfun=()=>console.log("hello");
arrowfun();
arrowfun();
arrowfun();

//role no 1
let arrowfun1=()=>{
    let a=10;
    let b=20;
    console.log(a+b);
};
arrowfun1()
arrowfun1()

//role no 2
let fun1=()=>{return "return some value"}
console.log(fun1());

//role no 3
// In arrow function "this" keyword word differently
let arrow=()=>{
    console.log(this)
    window.console.log("hello")
}
arrow();



//nested function
function outerfun(){
    let a=10;
    function innerfun(){
        console.log(a);
    }
    console.log("outer function called");
    innerfun();
}
outerfun();

//closure scoping
function outerfun(){
    let a=10;
    return function (){
        console.log(a++);
    }
}
let result1=outerfun();
result1();
result1();
result1();



//higher order function
function Landingpage(reg,log){
    console.log("Home page");
}
function Register(){
    console.log("Register function called");
}
function Login(){
    console.log("Login function called");
}
Landingpage(Register(),Login());//callback functions


//Generator function
 function* genfun(){
    console.log("generator");
 }
genfun().next();


 function* genfun(){
    yield a=10;
    yield b=20;//that will we be pass
    yield c=30;
    console.log("generator");
 }
 let result=genfun()
 console.log(result.next().value);
 console.log(result.next().value);
 console.log(result.next().value);
 result.next();


 //object method
 let person={
    id:100,
    name:"agalya",
    email:"agal@gmail.com",
    phone:8765437899
}

console.log(person);
console.log(person.name);
console.log(person.email);
console.log(person['phone']);//alternate way to access the object property


//map method
let arr=[1,2,3,4,5];
arr.map((val)=>{
    console.log(val);
});


//lexical scoping
function outerFun1(){
    let a=10;
    let b=10;
    function innerFun1(){
        function innerFun2(){
            console.log(a);
            console.log(b);
        }
        innerFun2()
    }
    innerFun1()
}
outerFun1()