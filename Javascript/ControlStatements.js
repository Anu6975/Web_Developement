/* Conditional Statements */

// 1. If-Else 

/* a. Voting-Eligible or Not */
// let ages=19;
// if(ages>18){
//     console.log("Eligible For Voting")
// }
// else{
//     console.log("Not Eligible for Voting!")
// }


/* --b--. Marks-Pass or Fail */
/*let a=parseInt(prompt("Enter Your Marks: "))
if(a<40){
    console.log("Fail!!")
}
else{
    console.log("Pass!")
}*/


/* --c--. Vowel or Not */
/*let b=prompt("Enter a Letter: ")
if(b=='a'||b=='e'||b=='i'||b== 'o' ||b== 'u'||b=='A'||b=='E'||b=='I'||b=='O'||b=='U'){
    console.log("Its a Vowel!")
}
else{
    console.log("Not a Vowel!")
}*/



/* --d--. Smallest Number */
// let no1=parseInt(prompt("Enter Number 1: "))
// let no2=parseInt(prompt("Enter Number 2: "))

// if(no1<no2){
//     console.log("Number 1 is Smaller than Number 2")
// }
// else{
//     console.log("Number 2 is Smaller than Number 1")
// }


/* --e.-- Room Entry Limit */
// let count = parseInt(prompt("Number of People Entering: "));
// let limit = 50;

// if (count <= limit) {
//     console.log("Entry allowed.");
// } 
// else {
//     console.log("Entry denied!");
// }


/* --f.-- Leap Year or not */
// let year=parseInt(prompt("Enter a Year: "))
// if(year%4==0){
//     console.log("It's a Leap Year!")
// }
// else{
//     console.log("Not a Leap Year")
// }


//2. Else If

/* --a.-- Largets Number */
// let num1=23
// let num2=44
// let num3=54
// let num4=65
// if(num1>num2 && num1>num3 && num1>num4){
//     console.log("Num1 is Largest Number!")
// }
// else if(num1<num2 && num2>num3 && num2>num4){
//     console.log("Num2 is Largest Number!")
// }
// else if(num1<num3 && num2<num3 && num3>num4){
//     console.log("Num 3 is Largest Number")
// }
// else{
//     console.log("Num 4 is Largets Number")
// }


/* --b.-- Number-Positive Negative or zero? */
/*let c=parseInt(prompt("Enter a Number: "))
if(c==0){
    console.log("Its a Zero!")
}
else if(c<0){
    console.log("Number is Negative")
}
else{
    console.log("Number is Positive")
}*/


/* --c--. Weekend or Weekday */
// let day=prompt("Enter Today's Day: ")

// if(day=='Saturday'||day=='Sunday'||day=='sunday'||day=='saturday'){
//     console.log("Yay! It's a Weekend!!")
// }
// else if(day=='Friday'||day=='friday'){
//     console.log("Phew, Tomorrow is Weekend!")
// }
// else{
//     console.log("Weekday :(")
// }

/* --d--. Water State */
//let temp=120
// if(temp<0){
//     console.log("Solid State(Ice)")
// }
// else if(temp>=100) { 
//     console.log("Gaseous State (Boiling Water)")
// }
// else{
//     console.log("Liquid State (Normal Water)")
// }

/* --e--. Age Group Classifier */
// let age=34
// if(age<13){
//     console.log("Category: Child")
// }
// else if(age<21){
//     console.log("Category: Teenager")
// }
// if(age<60){
//     console.log("Category: Adult")
// }
// else{
//     console.log("Category: Senior Citizen")
// }


//3. Switch Case

/* --a--. Time- Morning/Evening/Afternoon */
// let time=12
// switch(time){
//     case 12:
//         console.log("Good Afternoon")
//         break;
//     case 6:
//         console.log("Good Morning")
//         break;
//     case 4:
//         console.log("Good Evening")
//         break;
//     default:
//         console.log("Good Night")
// }

/* --b--. Simple Calculator */
// let num1=12
// let num2=6
// confirm("Enter a Operation  Number u wanna Perform->")
// let op=parseInt(prompt("1. Add 2. Sub 3. Mul 4. Div (1/2/3/4): "))
// switch(op){
//     case 1:
//         console.log("Addition is ",num1+num2)
//         break;
//     case 2:
//         console.log("Subtraction is ",num1-num2)
//         break;
//     case 3:
//         console.log("Multiplication is ",num1*num2)
//         break;
//     case 4:
//         console.log("Division is ",num1/num2)
//         break;
//     default:
//         console.log("Enter a Valid Number")
// }

/* --c--. Month Name Finder */
// let month=12
// switch(month){
//     case 1:
//         console.log("January")
//     case 2:
//         console.log("February")
//     case 3:
//         console.log("March")
//     case 4:
//         console.log("April")
//     case 5:
//         console.log("May")
//     case 6:
//         console.log("June")

//     case 7:
//         console.log("July")
//     case 8:
//         console.log("August")
//     case 9:
//         console.log("September")
//     case 10:
//         console.log("October")
//     case 11:
//         console.log("November")
//     case 12:
//         console.log("December")
// }

/* --d--.  Rating */
// let rating = parseInt(prompt("Rate our service from 1 to 5:"));
// switch (rating) {
//     case 5:
//         console.log("Excellent! We love you too.");
//         break;
//     case 4:
//         console.log("Good! We will keep improving.");
//         break;
//     case 3:
//         console.log("Average experience.");
//         break;
//     case 2:
//     case 1:
//         console.log("We are sorry. We will do better.");
//         break;
//     default:
//         console.log("Please enter a valid rating (1-5).");
// }


/* --e--. Signal */
// let signal = parseInt(prompt("Enter 1. Red, 2. Yellow, 3. Green:"));
// switch (signal) {
//     case 1:
//         console.log("STOP!");
//         break;
//     case 2:
//         console.log("READY / SLOW DOWN");
//         break;
//     case 3:
//         console.log("GO");
//         break;
//     default:
//         console.log("Enter Valid Nmber!");
// }



/* Looping Statements  */

// 1. For Loop 

/* --a--. Hello Printing  */
// for(let i=0; i<10; i++){
//     console.log("Hello: ",i)
// }

/* --b--. Table */
// let table= 3
// for(let i=1; i<=10;i++){
//     console.log(table*i)
// }


/* --c--. Sum */
// let digit=10
// let sum=0
// for(let i=0;i<=digit;i++){
//     sum=sum+i
// }
// console.log("Sum: ",sum)


/* --d--. Factorial */
// let fact=1
// let number=5
// for(let i=1;  i<=number; i++){
//     fact=fact*i
//     }
// console.log("Factorial is ",fact)


/* --e--. Even Number in Range */
// let range=20
// for(let i=0; i<=range; i++){
//     if(i%2==0){
//         console.log(" ",i)
//     }
// }

// 2. While Loop


/* --a--. Hello Printing  */
// let d=1
// while(d<=10){
//     console.log("Hellooooo", d)
//     d++
// }

/* --b--. Passward Protector  */
// let pass=""
// while(pass!=='open123'){
//     pass=prompt("Enter Passward: ")
//     if(pass!=='open123'){
//         console.log("Access Denied Try Again")
//     }
// }
// console.log("Access Granted!")


/* --c--. Star Printing  */
// let count=parseInt(prompt("How many stars do you want?"));
// let i=1;
// let result="";

// while (i<=count) {
//     result=result+"*";
//     i++;
// }
// console.log("Your stars: " + result);

/* --d--. sum  */
// let sum=0
// let dig=5
// let i=1
// while(dig>=i){
//     sum=sum+i
//     i++
// }
// console.log("Sum is: ",sum)

/* --e--. Multiples 0f 5 upto limit */
// let limit = parseInt(prompt("Enter Limit for multiples of 5: "));
// let i=5;
// while (i<=limit) {
//     console.log(i);
//     i=i+5; 
// }


// 3. do-while loop

/* --a--. Hello Printing  */
// let q=1
// do{
//     console.log("A", q)
//     q++
// }while(q<=10)

/* --b--. Enter Number till user exits  */
// let input
// confirm("Enter Your numbers: ")
// do{
//     input=parseInt(prompt())
// }while(input!=0)


/* --c--. Mandatory Positive Input  */
// let price;
// do {
//     price = parseInt(prompt("Product Price(must be positive):"));
// } while(price<=0);
// console.log("Price Accepted: " + price);



/* --d--. Hello Printing  */
/* --e--. Hello Printing  */

