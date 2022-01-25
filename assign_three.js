//*Mathematical Functions such as getting square of circl e, Nth prime number

console.log("\n 1.Area of Circle \
\n 2. Area of Sqaure \
\n 3. Nth Prime number ");

// const input = require("Enter your choice");
const prompt = require('prompt-sync')();
const input = prompt('Enter your choice');
switch(Number(input)){
    case 1:
        // console.log("Enter the radius");
        // let radius=require();
        const radius = prompt('Enter the radius');
        let area=3.14*radius*radius;
        console.log("Area of Circle=",area);
        break;

    case 2:
        const side = prompt('Enter the side of square');
        let sqarea=side*side;
        console.log("Area of Square=",sqarea);
        break;

     case 3: 
     let i=2,j=2;
     let flag=0;
     let count=0;
     let primeno=2;
     let num=prompt("Enter the value of n");
     while(count<num){
        for(j=2;j<i;j++){
            if(i%j==0 && i!=j){
                flag=1;
                break;
            }
           
        }
        if(flag!=1){
            count ++;
            primeno=i;
        }
        else{
            flag=0;
        }

        i++;
     }//end of while loop
     console.log(primeno);
     break;
    
    default:
        console.log("Enter correct Choice");
}
