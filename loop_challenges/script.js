//print odds 1-20 if divisible by 2 and has a remiander it is odd
for (i = 0; i < 20; i++)
    if (i % 2 == 1)
        console.log(i);

//decreasing multiples of 3

for (i = 100; i > 0; i--) {
    if (i % 3 == 0)

        console.log(i)
}

//Print the sequence -1.5 from 4 -4

for (i = 4; i > -4; i -= 1.5) {
    console.log(i);

}

//sigma add all of the values from 1-100 

var sum = 0

for (i = 1; i < 101; i++) {
    sum += i;
}
console.log(sum);


//Factorial  multiply all of the values from 1-12 onto some variable product and console.log the result

var product = 1
for (i = 1; i < 13; i++) {
    product *= i;
}
console.log(product);