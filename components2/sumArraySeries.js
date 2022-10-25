/*
Create an output array in which its each element would be 
an incrementation of the given input array by an incrementing series. 

a.       Input = [21,2331, 1,789…]
b.       Output = [22, 2334, 7, 799…]
c.       Series  -  1, 1+2, 1+2+3, 1+2+3+4…
series
f0 =1
f1= f0+2
f2=f1+3
f3= f2+4
*/
function SumSeries(arry) {
let series = new Array(arry.length -1);
let result = new Array(arry.length -1);
    series[0]=1;
    
    //create required series
    for(let i=1;i <= arry.length -1;i++){
    series[i] = series[i-1] +i+1;
    //console.log(series[i]);
    }

    for(let j =0; j<= arry.length -1; j++){
   result[j] = arry[j] + series[j]
    }
    

    console.log(result);
    
    }
    SumSeries([21,2331, 1,789]);