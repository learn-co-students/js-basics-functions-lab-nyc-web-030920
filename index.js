// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    return Math.abs(num - 42);
}

function distanceFromHqInFeet(num) {
    let distance = Math.abs(num - 42);
    return distance * 264;
}

function distanceTravelledInFeet(num1, num2) {
    let distance = Math.abs(num1 - num2);
    return distance * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs(destination - start) * 264;
    let fee = null;
    if (distance <= 400) {
        fee = 0;
    } else if (distance > 400 && distance < 2000) {
        fee = (distance - 400) * 2 / 100;
    } else if (distance >= 2000 && distance < 2500) {
        fee = 25;
    } else {
        fee = "cannot travel that far";
    }

    return fee;
}
