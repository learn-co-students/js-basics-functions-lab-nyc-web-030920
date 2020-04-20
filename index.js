// Code your solution in this file!
function distanceFromHqInBlocks(numOfBlocks) {
    if (numOfBlocks > 42) {
        return numOfBlocks - 42;
    } else {
        return 42 - numOfBlocks;
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks)  * 264
}

function distanceTravelledInFeet(start, finish) {
    if (start > finish) {
        return (start - finish) * 264
    } else {
        return (finish - start) * 264
    }
}

function calculatesFarePrice(start, finish) {
    let distanceTraversed = distanceTravelledInFeet(start, finish)
    if ( distanceTraversed < 400) {
        return 0
    } else if (distanceTraversed > 400 && distanceTraversed < 2000) {
        return (distanceTraversed - 400) * .02
    } else if (distanceTraversed > 2000 && distanceTraversed < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}