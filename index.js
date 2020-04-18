// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  const headQuarter = 42;
  if (Math.sign(num - headQuarter) === -1) {
    return headQuarter - num;
  } else {
    return num - headQuarter;
  }
}

function distanceFromHqInFeet(num) {
  const block = 264;
  return block * distanceFromHqInBlocks(num);
}

function distanceTravelledInFeet(num1, num2) {
  const block = 264;
  if (Math.sign(num1 - num2) === -1) {
    return (num2 - num1) * block;
  } else {
    return (num1 -num2) * block;
  }
}

function calculatesFarePrice(start, destination) {
  let distanceTravelled = distanceTravelledInFeet(start, destination);

  if (distanceTravelled <= 400) {
    return 0;
  } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
      return (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
      return 25;
    } else {
      return "cannot travel that far"
    }
}

    // it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
    //   // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
    //   expect(calculatesFarePrice(34, 32)).to.equal(2.56);
    // });

    // it('charges 25 dollars for a distance over 2000 feet', function() {
    //   expect(calculatesFarePrice(50, 58)).to.equal(25);
    // });

    // it('does not allow rides over 2500 feet', function() {
    //   expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');