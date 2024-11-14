function SumArr(array){
  let newArray = array.sort((a,b)=>b-a);

  let sum = newArray[0] + newArray[1];

  return sum ;
}

console.log(SumArr([1,2,3,4]));