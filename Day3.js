//task 1
const num=56
if(num>=0){
    console.log("Number is positive");
}else{
    console.log("number is negative");
}

//task 2
const age=21
if(age>=18){
    console.log("Eligble for voting");
}else{
    console.log("Not eligble for voting");
}
//task 3
const a=12
const b=45
const c=42

if(a>b && a>c){
    console.log("a is greatest in all");
}

if(b>a && b>c){
    console.log("b is greatest in all");
}

if(c>b && c>a){
    console.log("c is greatest in all");
}
//task 4
const day=5
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tuseday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");    
        break;
    case 6:
        console.log("Saturday");   
        break;     
    default:
        console.log("Sunday");
        break;
}
//task 5

const score=55;
switch (true) {
    case (score>90):
        
        console.log("A");
        break;
    case (score>80):
        
        console.log("B");
        break;
    case (score>70):
        
        console.log("C");
        break;
    case (score>60):
        
        console.log("D");
        break;
    case (score>50 ):
        
        console.log("E");    
        break;
    case(score>40):
        
        console.log("F");   
        break;     
    default:
        console.log("Fail");
        break;
}

// task 6
const ba=55
const s=(ba%2==0)?true:false;
console.log(s);

// task 7
const year=2021

if((year%4==0)&&(year%100!=0)||(year%400==0)){
    console.log("Year is leap year");
}else{
    console.log("Year is not leap year");
}
