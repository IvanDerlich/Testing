// console.log("Countring Vallets Test");

function countingValleysTest(input, expected, testNr){    
       
    actual = countingValleys(input);    
    
    // console.log("Starting Result Analysis #" + testNr);

    if(actual != expected){        
        console.log(actual + " <- Actual");
        console.log(expected + " <- Expected");        
        console.log("--FAILED TEST");  
        console.log(" ");
        console.log(" ");             
    }else{
        console.log("--APPROVED TEST");
        console.log(" ");
    }    
}

testNr = 1;
input = "UDDDUDUU";
expected = 1;
countingValleysTest(input,expected,testNr);

testNr = 2;
input = "DDUUDDUDUUUD"
expected = 2;
countingValleysTest(input, expected, testNr);

testNr = 3;
input = "DU"
expected = 1;
countingValleysTest(input, expected, testNr);

testNr = 4;
input = "DUDU"
expected = 2;
countingValleysTest(input, expected, testNr);

testNr = 5;
input = "DUDUDU"
expected = 3;
countingValleysTest(input, expected, testNr);

testNr = 6;
input = "DUDUDUDUDUDUDU"
expected = 7;
countingValleysTest(input, expected, testNr);

testNr = 7;
input = "DDUUDUDUDUDUDU"
expected = 6;
countingValleysTest(input, expected, testNr);