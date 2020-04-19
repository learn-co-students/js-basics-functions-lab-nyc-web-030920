// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - 42;
      } else {
        return 42 - blockNumber;
      }
    }

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(starting_block, ending_block) {
    if (starting_block > ending_block) {
        return (starting_block - ending_block) * 264;
      } else {
        return (ending_block - starting_block) * 264;
      }
    }

function calculatesFarePrice(starting_block, ending_block) {
    const distance = distanceTravelledInFeet(starting_block, ending_block)
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


