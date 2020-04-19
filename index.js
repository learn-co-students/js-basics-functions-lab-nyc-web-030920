// Code your solution in this file!
function distanceFromHqInBlocks(val)
{
    let blocks = val - 42;
    return Math.abs(blocks);
}

function distanceFromHqInFeet(val)
{
    return distanceFromHqInBlocks(val) * 264;
}

function distanceTravelledInFeet(start, end)
{
    let dist = (start - end)*264;

    return Math.abs(dist);
}

function calculatesFarePrice(start, end)
{
    let dist = distanceTravelledInFeet(start, end);

    if(dist <= 400)
    {
        return 0;
    }
    else if(dist > 400 && dist <= 2000)
    {
        return 0.02 * (dist - 400);
    }
    else if(dist > 2000 && dist < 2500)
    {
        return 25;
    }
    else
    {
        return 'cannot travel that far';
    }
}