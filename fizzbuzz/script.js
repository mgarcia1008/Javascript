
for (var i = 1; i < 101; i++)
   // the % operator determines the remainder, if a number is a multiple of 3 it will have no remainder that;s why we put ==0
    if (i % 3 == 0) {
      console.log("Fizz");
   }
   else if (i % 5 == 0) {
      console.log("Buzz");
   } else {
      console.log(i);
   }