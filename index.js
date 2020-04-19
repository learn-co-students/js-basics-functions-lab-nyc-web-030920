// Code your solution in this file!
const HQ_STREET = 42;
const STREET_TO_FEET = 264;

function distanceFromHqInBlocks(street){
    return Math.abs(HQ_STREET - street);
}

function distanceFromHqInFeet(street){
    return STREET_TO_FEET * distanceFromHqInBlocks(street);
}

function distanceTravelledInFeet(start, end){
    return STREET_TO_FEET * Math.abs(start-end);
}

function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start, end);
    if(distance > 2500){
        return 'cannot travel that far';
    }
    else if(distance > 2000){
        return 25;
    }
    else {
        distance = Math.max(0, distance-400);
        return distance * 0.02;
    }
}