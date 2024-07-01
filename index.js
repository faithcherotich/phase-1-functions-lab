// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const headquarters = 42; 
    return Math.abs(pickupLocation - headquarters);
  }
  console .log(distanceFromHqInBlocks(50))
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; 
  }
  console .log(distanceFromHqInFeet(50))
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(start - destination);
    return blocksTravelled * 264;
  }
  console .log(distanceTravelledInFeet(34,38))
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
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
  console .log(calculatesFarePrice(34,32))
  
      
