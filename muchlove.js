function howMuchILoveYou(nbpetals){
    
    const lovePhrases = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all"
      ];

    let newIndex = 0 ;

    if (nbpetals<=0){
    return "I love you";
 }else {
    return lovePhrases[(nbpetals-1)%lovePhrases.length];
}

}

console.log(howMuchILoveYou(7));

console.log(howMuchILoveYou(3));

console.log(howMuchILoveYou(257));