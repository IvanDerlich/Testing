function compareTriplets(a, b) {

    var sol = [0, 0];

    for(var i = 0 ; i < 3 ; i++){
        if( a[i] > b[i] )
            sol[0] += 1;
        if (a[i] < b[i])
            sol[1] += 1;
    }

    return sol
}


function compareTripletsAssert(actual, expected) {

    console.log("Actual: " + actual);
    console.log("Expected: " + expected);

    if(actual[0] !=expected[0]){
        console.log("----DISAPROVED----")
        return 0;
    }
    if (actual[1] != expected[1]) {
        console.log("----DISAPROVED----")
        return 0;
    }else{
        console.log("----APROVED----")
    }
}

var a = [4, 5, 8];
var b = [5, 3, 8];
var r = [1, 1]

compareTripletsAssert(compareTriplets(a, b), r);


var a = [17, 28, 30];
var b = [99, 16, 8];
var r = [2, 1]

compareTripletsAssert(compareTriplets(a, b), r);

var a = [1, 1, 1];
var b = [0, 0, 0];
var r = [3, 0]

compareTripletsAssert(compareTriplets(a, b), r);

var a = [4, 5, 8];
var b = [5, 3, 8];
var r = [1, 1]

compareTripletsAssert(compareTriplets(a, b), r);

var a = [4, 5, 8];
var b = [5, 3, 8];
var r = [1, 1]

compareTripletsAssert(compareTriplets(a, b), r);

