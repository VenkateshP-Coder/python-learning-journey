const flag = true;
if (flag) {
    console.log("The flag is true");
} else {
    console.log("The flag is false");
}

for (let i = 0; i < 5; i++) {
    console.log("Iteration number:", i);
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