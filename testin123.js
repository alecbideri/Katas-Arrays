function test(array){
    let numberedlines = [];

    for (var i = 0 ; i <array.length ; i++){
        numberedlines.push(`${i+1}: ${array[i]}`);
    }

    return numberedlines;
}

console.log(test(["a", "b", "c"]));