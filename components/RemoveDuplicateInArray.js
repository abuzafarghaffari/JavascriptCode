var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
 
    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
 
    console.log(removeDuplicates(arr));

    //or

    //Using a Set() Method: This method sets a new object type with ES6 (ES2015) that allows you to create collections of unique values.


    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }