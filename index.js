// Code your solution in this file!
function distanceFromHqInBlocks(num1){
    if (num1 > 42) 
    {return num1 - 42}
    else if (num1 < 42)
    {return 42 - num1}
}

function distanceFromHqInFeet(num1){
    let blocks = distanceFromHqInBlocks(num1)
    return blocks*264
}

function distanceTravelledInFeet(num1, num2){
    if (num1 > num2)
    {return (num1 - num2)*264}
    else if (num1 < num2)
    {return (num2-num1)*264}
}

function calculatesFarePrice(num1, num2){
    let feet = distanceTravelledInFeet(num1, num2)
    if (feet < 400)
    {return 0}
    else if (feet > 400 && feet < 2000)
    {return (feet-400) * .02}
    else if (feet > 2000 && feet < 2500)
    {return 25}
    else if (feet > 2500)
    {return 'cannot travel that far'}
}