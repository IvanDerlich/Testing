// console.log("minMaxSum");


function minMaxSum(arr) {
    arr.sort((a, b) => a - b);
    var res=[0,0];

    for(i=0;i<arr.length-1;i++)
        res[0]+=arr[i];
    for (i = 1; i < arr.length; i++)
        res[1] += arr[i];    

    return res;
}

function minMaxSumTest(input, expected){    
    console.log("Input: " + input);
    console.log("Input Ordenado: " + input.sort((a, b) => a - b));
    actual = minMaxSum(input);
    console.log("Actual: " + actual); 
    console.log("Expected: " + expected); 

    for (var i = 0; i < 2; i++)
        if (actual[i] != expected[i])
            return console.log("----DISAPROVED----")

    return console.log("----APROVED----");
}

console.log("--Inicio Tests:--");


input = [29, 7, 16, 5];
//5, 7, 16, 29
expected = [ 1 , 2];
minMaxSumTest(input,expected);

input = [21, 24, 21, 24];
//21,21,24,24
expected = [66, 69];
minMaxSumTest(input,expected);

input = [3, 21, 10, 6];
//3,6,10,21
expected = [19, 37]
minMaxSumTest(input,expected);

input = [29, 16, 25, 2];
//2,16,25,29
expected = [43, 70]
minMaxSumTest(input,expected);

input = [13, 9, 16, 13];
//9,13,13,16
expected = [35, 42]
minMaxSumTest(input,expected);

input = [23, 13, 4, 22];
//4,13,22,23
expected = [39, 58]
minMaxSumTest(input,expected);

input = [20, 26, 15, 8];
//8,15,20,26
expected = [43, 61]
minMaxSumTest(input,expected);

input = [8, 29, 18, 12];
//8,12,18,29
expected = [38, 59]
minMaxSumTest(input,expected);

input = [27, 6, 2, 27];
//2,6,27,27
expected = [35, 60]
minMaxSumTest(input,expected);

console.log("--Fin Tests:--");