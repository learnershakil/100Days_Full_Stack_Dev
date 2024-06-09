// Let and var used to create variable but var get defined out of scope
// {
//     function sum(){
//         let a = 10;
//         console.log(a+b);
//     }
//     sum();
// }
// var b =5;
// {
//     function sum(){
//         let a = 10;
//         console.log(a+b);
//     }
//     sum();
// }

//const define constant -> never change
// let a = 5;

// a=10;
// console.log(a);

// const b = 10;
// b=12;
// console.log(b); //get an error

//Arthemetic operations
/*
+ add
- sub
* mul
** exponent
/ division
% modulus
++ increment
-- decrement
*/

//Assignment operator
/*
 =
 +=
 -=
 *=
 /=
 %=
 **=
 */

//Comparison opertor
/*
 ==
 ===
 !=
 !==
 >
 <
 >=
 <=
 ?
 */

 //Logical Operator
 /*
 && and
 || or
 ! not
 */

 //Ternary Operator
 /*
 (condition) ? true : false;
 */
// let sam = 18;
// let a = (sam>16) ? "Drive car":"ghar pr khana bnao"; //condition define kr rha hu ya q kr rha hu
// console.log(a);

//Comment

/*
multi-line 
comment
*/

//Conditional Statement
// let sam = 90;
// if(sam <= 10){
//      console.log("Sam bahut chota h!!");
// }else if(sam < 20){
//     console.log("allow to go child park!!!");
// }else {
//     console.log("not allow to go child park!!!");
// }

//For loop
// for(i=1;i<=10;i++){
//   console.log("hello");
// }

//while loop
// let i=0;
// while(i<15){
//   console.log(i);
//   i++;
// }

//do while loop
// let i = 20;
// do{
//   console.log(i);
//   i++;
// }while(i<15)

//Object's
// let person ={
//   name: "shakil",
//   Age: 22,
//   kaam: "game khelta h",
//   address: "home"
// }

// console.log(person.Age)

//For in Loop
// for(key in person){
//   console.log(key + " : " + person[key])
// }

// console.log(person);

//Array
// const cars = ["BMW", "Volvo", "Mini"];
// let arr = ["sam","shakil","sameera"];
// console.log(arr[1])

//For of loop
// let text = "";
// for (let x of cars) {
//   text += x;
// }
// console.log(text);

//Function's
// function greet(){
//   console.log("Hello");
// }
// greet() //calling the function

//Function to sum 2 no's
// function sum(a, b){
//     console.log(a+b);
//   }
//   sum(2,3) //calling function with parameter

//Function to multiply 3 no's -> write by student attend the class
// function multi(a, b, c) {
//     console.log(a * b * c);
// }

// multi(1,2,3)

//Greet function
// function greet(name) {
//     console.log("hello " + name);
// }

// greet("rohit");

// function sam(name){
//     console.log("hello",name);
//   }
//   sam("sitare")
  
//   function sam1(name){
//     console.log("hello"+name);
//   }
//   sam1("shakil")

// indexOf
// function findIndexOf(str, target) {
//   console.log("Original String:", str);
//   console.log("Index:", str.indexOf(target));
// }
// findIndexOf("rohit kumar", "kumar");

