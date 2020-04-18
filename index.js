// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    let distance = (pickup - 42)
    let value;
    (distance < 0) ? value = (distance * -1) : value = (distance)
    return value
}
function distanceFromHqInFeet(pickup){
    return (distanceFromHqInBlocks(pickup) * 264)
}
function distanceTravelledInFeet(start, end) {
    let blocks = (end - start);
    let value;
    (blocks < 0) ? value = (blocks * -1) : value = (blocks)
    return (value * 264)
}
function calculatesFarePrice(start, end) {
    let dist = distanceTravelledInFeet(start, end);
    let fare;
    if (dist <= 400) {
            fare = 0
    }
    else if (dist > 400 && dist < 2000) {
            fare = (dist - 400) * 0.02
    }
    else if (dist > 2000 && dist <= 2500) {
            fare = 25
    }
    else if (dist > 2500) {
            fare = 'cannot travel that far'
    }
    return fare
}