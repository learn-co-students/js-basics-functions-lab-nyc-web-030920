// Code your solution in this file!
function distanceFromHqInBlocks(value){
    if (value > 42){
    return value - 42
    } else if (value < 42){
        return 42 - value
    }
}

function distanceFromHqInFeet(value){
    let feet = distanceFromHqInBlocks(value) * 264 
    return feet 
}

function distanceTravelledInFeet(traveled, travel){
    if (traveled < travel){
        return (travel - traveled) * 264
    } else {
        return (traveled - travel) * 264
    }
}

function calculatesFarePrice(traveled,travel){
    let distance = distanceTravelledInFeet(traveled, travel)
    if (distance < 400){
        return 0 
    } else if (400 < distance && distance < 2000 ){
        return  Math.round(100 * ((0.02 * distance) - (0.02 * 400)))/100 
    } else if (2000 < distance && distance < 2500){
        return 25
    } else if (distance > 2500){
        return "cannot travel that far"
    
    }
}

