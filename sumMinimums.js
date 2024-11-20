function sumMinimum(array){

    let temp = [] ;
    let sum = 0 ;

    for (var i = 0 ; i < array.length ; i++){
        for (var j = 0 ; j < array[i].length - 1 ; j++){
            for (k = 0 ; k < array[i].length - j - 1 ; k++){
                if(array[i][k] > array[i][k+1]){
                    temp = array[i][k];
                    array[i][k] = array[i][k+1];
                    array[i][k+1] = temp ;
                }
            }
        }
          sum+= array[i][0];
    }

    return sum ;
}

// simple solution

function SuMMinimum(array){
    let total = 0 ;

    for (var i = 0 ; i < array.length ; i++){
        total+= Math.min(...array[i]);
    }

    return total;
}

console.log(SuMMinimum( [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));