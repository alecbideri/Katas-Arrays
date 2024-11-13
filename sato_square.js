// left to right 

function readRowbyRow(arr){
    for(var i = 0 ; i < arr.length ; i++){
        for(var j = 0 ; j < arr[i].length ; j++){
            return matrix[i][j] ;
        }
    }
}

// Right to left 

function readRowReverse(arr){
    for (var i = 0 ; i < arr.length ; i++){
      for (var j = arr[i].length-1 ; j >= 0 ; j++){
        return arr[i][j];
      }
    }
}

function readByColumn(arr){
    for (var j = 0 ; j < arr[0].length ; j++){
        for (var i = 0 ; i < arr.length ; i++){
            return arr[i][j];
        }
    }
}


function readByColumnReverse(arr){
    for (var j = 0 ; arr[0].length ; j++){
        for (var i = 0 ; i < arr.length -1 ; i++){
            return arr[i][j];
        }
    }
}



const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];