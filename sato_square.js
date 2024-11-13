// left to right 

function readRowbyRow(arr){
    let result = [];
    for(var i = 0 ; i < arr.length ; i++){
        for(var j = 0 ; j < arr[i].length ; j++){
            result.push(arr[i][j])  ;
        }
    }
}

// Right to left 

function readRowReverse(arr){
    let result = [];
    for (var i = 0 ; i < arr.length ; i++){
      for (var j = arr[i].length-1 ; j >= 0 ; j++){
        result.push(arr[i][j])  ;
      }
    }
}

// top to bottom 

function readByColumn(arr){
    for (var j = 0 ; j < arr[0].length ; j++){
        for (var i = 0 ; i < arr.length ; i++){
            return arr[i][j];
        }
    }
}

// bottom to top 

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

console.log(readRowbyRow(matrix));

console.log(readRowReverse(matrix));

console.log(readByColumn(matrix));

console.log(readByColumnReverse(matrix));