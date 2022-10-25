

function short(arr){

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    return console.log(arr);
    // if to find 2nd largest mrthod
    return console.log(arr[arr.length-2]);

    }
    
    short([4, 32, 2, 5, 8]);