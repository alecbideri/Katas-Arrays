// The long way to do it 

function twoOldestAges(ages){
    let oldest = ages[0];
    let secondOldest = ages[1];

    for (var i = 0 ; i < ages.length ; i++){
        if(ages[i] > oldest){
            secondOldest = oldest;
            oldest = ages[i];
        }else if (ages[i] > secondOldest){
            secondOldest = ages[i];
        }
    }

    return [oldest , secondOldest];
}

// the easiest way to implement it 

function TwoOldestAges(ages){
    ages.sort((a , b)=> b-a);
    return [ages[1] , ages[0]];
}

console.log(twoOldestAges([1,5,87,45,8,8]));
console.log(TwoOldestAges ([1,5,87,45,8,8]));