//HCF or Highest Common Factor is the greatest number which divides each of the two or more numbers.
// HCF is also called the Greatest Common Measure (GCM)
function HCF() {

    var a = 36;
    var b = 54;
    // loop start from smaller number
    //it check division from largest number

    for(var i = a<b? a:b; i >0 ; i--){
    
        if(a%i ===0 && b%i===0){
            
    break;
        }
    }
    return i
    }
    
    HCF();