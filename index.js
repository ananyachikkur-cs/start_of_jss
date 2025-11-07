 //if else conditional statements
 let age = prompt( "what is your age   ");
 if (age<18){
    console.log("you are minor";)
 }
 else if (age==18){
    console.log("apply for voter id add get ready to vote me ");
 }
 else{"please vote me. i will serve for you"};

 
// ternary operator example
const age = 20;
const canvote = age>=18 ? 'yes' : 'no';
const votemessage = age>=18 ? console.log('You can vote') : console.log('You cannot vote');

//switch option 
const option = 2;

switch (option) {
    case 1: console.log("english");
    break; // break is used to exit the switch statement they stop the moving forward 
    case 2: console.log("spanish");
    break;// if we dont use break it will continue to the next case
    case 3: console.log("french");
    break;
    default: console.log("language not available");

}
a=2
b=4
opn = '*'
switch (opn) {
    case '+': console.log(a+b);
    break;
    case '-': console.log(a-b);
    break;
    case '*': console.log(a*b);
    break;
    case '/': console.log(a/b);
    break;
    default: console.log("invalid operation");
}
// logical operators
//And operator (&&) both should be true
//or
const age = 18;
const gender = 'male' ;

if (age >=18 && gender == 'male'){
    console.log("you are adult male");
}
else{
    console.log("you are minor child");
}