function solution( a ,  b){
    return a + b;
}

function assert(actual,expected){
    
    console.log("Actual: " + actual);
    console.log("Expected: " + expected);

    if(actual === expected)
        console.log("----APROVED----")
    else
        console.log("----DISAPROVED----");
    
}

assert(solution(1, 3), 4);
assert(solution(1, 6), 7);
assert(solution(1, 3), 3);
assert(solution(1, 3), 9);