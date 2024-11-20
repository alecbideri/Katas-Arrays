function maxProduct(numbers , size){
    let product = 1 ;

    for (var i = 0 ; i < size ; i++){
        product+= Math.max(...numbers[i]);
    }

    return product;
}

console.log(maxProduct([4, 3, 5], 2), 20);