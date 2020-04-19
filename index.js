// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks > 42 ){
    return blocks - 42;
    // 43 - 42 => 1
  } else {
    return 42 - blocks;
    // 50-42 = 8
    // 42 - 34 = 8
  }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, finish) {
  if (start > finish)
  return (start - finish) * 264
  else
  return (finish - start) * 264
}

function calculatesFarePrice(start, finish) {
  const distance = distanceTravelledInFeet(start, finish)

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
