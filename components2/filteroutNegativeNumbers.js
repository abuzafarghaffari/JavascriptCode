//“filter out negative numbers with javascript”

function short(arr){
arr = arr.filter((x)=>{
return x >-1;
});
return arr;
}

short([18, -42, 21, 6, -50]);