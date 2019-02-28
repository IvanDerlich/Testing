function simpleArraySum(ar) {    
    var sum = 0;
    ar.forEach(element => {
        sum += element;
    });
    return sum;
}