// Code your solution in this file!
function distanceFromHqInBlocks(street){
    const hq= 42
    var distance = Math.abs( hq - street)
    return distance
}

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start,end){
    var blocks = Math.abs(end - start)
    return blocks*264
}

function calculatesFarePrice(start,destination){
    var fare //cents
    const blocksTravelled = Math.abs(destination-start)
    var distance = blocksTravelled *264

    if (distance <= 400) {
        fare = 0
        return fare
    } else if (distance > 400 && distance <2000){
        fare = ((distance -400)*2)/100
        return fare
    } else if (distance > 2000 && distance <2500){
        fare = 25
        return fare
    } else if (distance > 2500){
        return "cannot travel that far"
    }
}