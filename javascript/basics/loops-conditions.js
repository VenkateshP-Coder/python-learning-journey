const flag = true;
if (flag) {
    console.log("The flag is true");
} else {
    console.log("The flag is false");
}

//from 1 to 10, get multiples of 2 and 5
let breaker = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
    console.log("Iteration number:", i);
    breaker++;
    if (breaker === 5) {
        console.log("Breaking the loop after 5 multiples of both 2 and 5.");
        break;
    }
} else {
    console.log("Not a multiple of both 2 and 5:", i);
}
}

// Code executes IF condition is true
let count = 3;
while (count < 3) {
    console.log("Count is:", count);
    count++;
}
// Code executes AT LEAST ONCE
let counter = 3;
do {
    console.log("Do-While Count is:", counter);
    counter++;
    console.log("After increment:", counter);
} while (counter < 5);

let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}