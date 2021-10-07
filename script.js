// task 1

let i = 0;

while( i <= 49 ) {
    i++;
    console.log(i);
}

// task 2

for (let even = 2; even <= 100; even++) {
    if (even % 2 == 0) {
      console.log(even);
    }
  }

  //task 3

  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  function arraySum(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
      sum += array[i];
      }
  alert(sum);
  }
  arraySum(arr);



//задание с занятия - числа кратные 5


  for (let item = 5; item <= 1000; item++) {
    if (item % 5 == 0) {
      console.log(item);
    }
  }

