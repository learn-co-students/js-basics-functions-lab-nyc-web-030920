function distanceFromHqInBlocks(numOfBlocks) {
    if (numOfBlocks > 42) {
        return numOfBlocks - 42;
    } else {
        return 42 - numOfBlocks;
    }
}

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264
}

function distanceTravelledInFeet(start, end) {
    if (start < end) {
        return (end - start) * 264;
    } else {
        return (start - end) * 264;
    }
}

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }