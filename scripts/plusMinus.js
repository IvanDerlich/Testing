function plusMinus(arr = []) {

    var positive = 0;
    var negative = 0;
    var zeroes = 0;
    var total = arr.length;    

    for(var i = 0 ; i < total ; i++){

        arr[i] >  0 ? positive += 1 : 0;
        arr[i] <  0 ? negative += 1 : 0;
        arr[i] == 0 ? zeroes   += 1 : 0;
    }

    return [ positive/ total, negative/ total, zeroes/ total];
}

function assert(input, expected) {

    console.log("Input: "+input);
    actual = plusMinus(input);

    console.log("Actual: " + actual);
    console.log("Expected: " + expected);

    for(var i = 0 ; i < 3; i++)
        if (actual[i] != expected[i])
            return console.log("----DISAPROVED----")              
        
    return console.log("----APROVED----")  ;
   
}

input = [-4, 3, -9, 0, 4, 1];
output = [0.500000, 0.333333, 0.166667];
assert(input,output);

input = [-4];
output = [0, 1, 0];
assert(input, output);

input = [-1, 1];
output = [0.5, .5, 0];
assert(input, output);

input = [-4, 3, 3, 4];
output = [0.75, .25, 0];
assert(input, output);

input = [2, -2, 1, -4, 4];
output = [.6, 0.4, 0];
assert(input, output);

input = [-2, 0, -3, -4];
output = [0, 0.75, .25];
assert(input, output);

input = [-2, 0, -3];
output = [0, .666666, .33333];
assert(input, output);

input = [-2, 2, 4, -3, 4, -3];
output = [.5, .5, 0];
assert(input, output);

input = [2, -4, -2, -4];
output = [ .25, .75 ,0];
assert(input, output);

input = [-4];
output = [ 0, 1,0];
assert(input, output);

input = [1, -4, -3];
output = [.333333, .666666,0];
assert(input, output);

input = [-1, 3];					
output = [.5, .5,0];
assert(input, output);

