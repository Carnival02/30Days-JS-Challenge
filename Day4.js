//task 1
for(let i=1;i<11;i++){
    console.log(i);
}

//task 2

const num=5
for(let i=1;i<11;i++){
    console.log(`${num} x ${i} =`,num*i);
}
//task 3

let sum=0
let i=0;
while(i<11){
   sum= sum+i;
    i++;
}
console.log(sum);
//task 4
let numm=10;
while(numm>0){
    console.log(numm);
    numm--;
}

//task 5
let ii=1;
do {
    console.log(ii);
    ii++
} while (ii<6);

//task 6

let fact=5;
let ans=1;

do {
    ans=ans*fact;
    fact--;
    
} while (fact>0);
console.log(ans);

//task 7
let parttern=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        parttern+="*";
    }
   parttern+="\n";
}
console.log(parttern);

//task 8

for(let i=0;i<11;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

//task 9
for(let i=0;i<11;i++){
    if(i==7){
        break;
    }
    console.log(i);
}
