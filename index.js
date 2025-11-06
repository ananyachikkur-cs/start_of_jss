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
