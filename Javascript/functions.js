/* Default Function */

function hello(){                           //Function Definition
    console.log("Hello Function!!")         //Block of Code
}
hello()                                     //Function Calling



/* Parameterized Function  */
/* Named Function  */

function add(a,b){              //Parameters 
    console.log(a+b)
}
add(5,6)                        // Arguments



/* Ananomous Function  */

// function (a,b){
//     console.log(a+b)
// }
// (4,5)



/* Immediate Invoke Function(IIF)  */

// (function (a,b){
//     console.log(a+b)
// }
// (4,5))


/* Function with Expression  */

let mn=function(a,b){
    console.log(a-b)
}
mn(10, 3)


/* Arrow Function  */

let n=((a,b)=>{
    console.log(a*b)
})
n(4,5)

