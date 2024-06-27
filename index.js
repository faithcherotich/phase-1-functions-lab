// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const headquarters = 42; 
    return Math.abs(pickupLocation - headquarters);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; // Each block is 264 feet
  }
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(start - destination);
    return blocksTravelled * 264;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare for distance between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
  }
  
      
