function distanceFromHqInBlocks (blocks) {
    if(blocks <= 42){
     return 42 - blocks;
    }
    else if(blocks > 42){
     return blocks - 42;
    }
  }
   
function distanceFromHqInFeet (blocks) {
    let feet = distanceFromHqInBlocks(blocks) * 264;
    return feet ;
}


function distanceTravelledInFeet(start, end){
    let blocks = start - end;
    let feet = distanceFromHqInBlocks(blocks);
    let result = distanceFromHqInFeet(feet);
    return result;
}

function calculatesFarePrice(start, detination){
   const distance = distanceTravelledInFeet(start, detination)
   if(distance <= 400){
       return 0;
   } 
   else if (distance > 400 && distance <= 2000){
       return .02 * (distance - 400);
   }
   else if (distance > 2000 && distance < 2500){
       return 25;
   }
   else {
       return "cannot travel that far";
   }
}
