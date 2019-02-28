function staircase(n) {
    for(i = 0; i < n; i++){      
        string = ""  ;
        for(j = 0 ; j < n; j++)
            n <= ( i + j) +1 ? string += "#": string += " ";        
        console.log(string);
    }
}

function staircaseTest(n){
    console.log(n);
    staircase(n);
    console.log("------");
}

for( var i = 0; i< 10 ; i++)
    staircaseTest(i);
