function twoOldestAges(ages) {
    let oldest = ages[0];
    let secondOldest = ages[1];
  
    for (let i = 2; i < ages.length; i++) {
      if (ages[i] > oldest) {
        secondOldest = oldest;
        oldest = ages[i];
      } else if (ages[i] > secondOldest) {
        secondOldest = ages[i];
      }
    }
  
    return [oldest, secondOldest];
  }

  console.log(twoOldestAges([1,5,87,45,8,8]));