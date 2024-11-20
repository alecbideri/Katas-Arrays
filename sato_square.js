// left to right 

function readRowbyRow(arr){
    let result = [];
    for(var i = 0 ; i < arr.length ; i++){
        for(var j = 0 ; j < arr[i].length ; j++){
            result.push(arr[i][j])  ;
        }
    }
    return result ;
}

// Right to left 

function readRowReverse(arr){
    let result = [];
    for (var i = 0 ; i < arr.length ; i++){
      for (var j = arr[i].length-1 ; j >= 0 ; j++){
        result.push(arr[i][j])  ;
      }
    }
    return result ;
}

// top to bottom 

function readByColumn(arr){
    let result = [];
    for (var j = 0 ; j < arr[0].length ; j++){
        for (var i = 0 ; i < arr.length ; i++){
            result.push(arr[i][j])  ;
        }
    }
    return result ;
}

// bottom to top 

function readByColumnReverse(arr){
    let result = [];
     result.push(arr[i][j])  ;
    for (var j = 0 ; arr[0].length ; j++){
        for (var i = 0 ; i < arr.length -1 ; i++){
            result.push(arr[i][j])  ;
        }
    }
    return result ;
}



const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(readRowbyRow(matrix));

console.log(readRowReverse(matrix));

console.log(readByColumn(matrix));

console.log(readByColumnReverse(matrix));