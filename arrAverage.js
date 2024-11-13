function getAverage(marks){
    let sum = 0 ;
    let average = 0 
    for (var i = 0 ; i < marks.length ; i++){
        sum += marks[i];
    }

    return average = sum / marks.length ;
}

console.log(getAverage([2,2,2,2]));