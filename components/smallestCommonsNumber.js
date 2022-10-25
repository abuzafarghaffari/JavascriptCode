//The least common multiple (LCM) of two numbers is the lowest possible number that can be divisible by both numbers.
//LCM
// to find the lcm 2 number
function LCM(a,b) {

    
    
    for(var i =1; i < a*b; i++){
    
        if(i%a ===0 && i%b===0){
            
    break;
        }
    }
    return i
    }
    
    LCM(7,2);

// to find the lcm 3 or more number

var a = 7;
var b = 2;
var c= 5;

for(let i =1; i < a*b*c; i++){

    if(i%a ===0 && i%b===0 && i%c ===0){
        return i;
    }
}
