function distanceFromHqInBlocks(location){
let dist = location - 42 
    if (dist < 0 ){
        dist = -(dist);
    };
return dist
}

function distanceFromHqInFeet(location){
    let blocks = distanceFromHqInBlocks(location)
    return blocks * 264; 
}

function distanceTravelledInFeet(start, end) {
    let dist;
    if (start > end){
        dist = start - end; 
        return dist *264 
    }
    else {
        dist = end - start;
        return dist * 264;
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