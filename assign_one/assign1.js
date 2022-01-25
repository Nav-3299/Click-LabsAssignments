//*Assignment 1  calculator
function calc(){
    let choice = document.forms["myForm"]["choice"].value;
    let num1 = document.forms["myForm"]["num1"].value;
    let num2 = document.forms["myForm"]["num2"].value;
    num1=Number(num1);
    num2=Number(num2);
    choice=Number(choice);
    // alert(choice);
    switch(choice){
        case 1:
            let result=num1+num2;
            alert(num1+"+" +num2+"="+ result);
            break;
    
        case 2:
             let result2=num1-num2;
            alert(num1+"-" +num2+"="+ result2);
            break;
    
        case 3:
           let  result3=num1*num2;
            alert(num1+"*" +num2+"="+ result3);
            break;
    
        case 4:
             let result4=num1/num2;
            alert(num1+"/" +num2+"="+ result4);
            break;
        
        default:
           alert("Enter Valid choice");
    }
}
