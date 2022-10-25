
function write(){
    
    return console.log([1,2,3,4,5,6,7,8,9,10]);
}
write();


array1 = [1,2,4,5,6,7]


array2 = [1,2,3,8,9,4,5,6]

const newarr = array1.concat(array2)

const news = [...new Set(newarr)];
