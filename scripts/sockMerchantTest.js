function sockMerchantTest(input, expected, test){
   
    var actual = sockMerchant(input);    
    
    
    if(actual == expected )
        return console.log("---APPROVED TEST # " + test + "---")
    else
        if(actual > input.length / 2)
            console.log("PROBLEMA: No pueden haber mas que pares que la mitad de logitud del arreglo");        

    
    console.log(actual +  " <- Actual ");
    console.log(expected + " <- Expected ");
    
    console.log("---FAILED TEST # "+ test + "---");
}

console.log("---Comienzan los tests---");
test = 1;
input = [10, 20, 20, 10, 10, 30, 50, 10, 20];
expected = 3;
sockMerchantTest(input,expected,test);

test = 2;
input = [3, 2, 3, 7, 7, 1, 2];
expected = 3;
sockMerchantTest(input, expected, test);

test = 3;
input = [9, 3, 2, 3, 8, 6];
expected = 1;
sockMerchantTest(input, expected, test);

test = 4;
input = [5, 2, 4, 6, 8, 3, 1];
expected = 0;
sockMerchantTest(input, expected, test);

test = 5;
input = [0, 8, 6, 7, 5, 7];
expected = 1;
sockMerchantTest(input, expected, test);

test = 6;
input = [4, 4, 4, 4, 4, 7];
expected = 2;
sockMerchantTest(input, expected, test);

console.log("---Terminan los tests---");





