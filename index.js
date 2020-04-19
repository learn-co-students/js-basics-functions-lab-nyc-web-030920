// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) { 
    if (blockNumber > 42) {
        return blockNumber - 42;
    }  
    else {
        return 42 - blockNumber; 
    }

}

function distanceFromHqInFeet(blockNumber ) {
   return  distanceFromHqInBlocks(blockNumber )* 264;
}

function distanceTravelledInFeet(pickUp,dropOff) {
    if (dropOff < pickUp  )
    return (pickUp -dropOff) * 264;
    else 
    return (dropOff - pickUp)* 264;


}

  function calculatesFarePrice(start, destination) {
      const distance = distanceTravelledInFeet(start,destination);

      if (distance <= 400 ) {
      return  0 ; }
      else if ( distance <= 2000 && distance > 400 ) {
      return (distance  - 400 ) *0.02 ; }
     
      else if (distance  > 2000  && distance < 2500 ){
      return 25; }
      else {
          return 'cannot travel that far'; 
      }
  }