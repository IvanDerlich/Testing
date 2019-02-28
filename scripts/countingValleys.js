function countingValleys(input){

    try {

        // console.log(input + " <- Input");

        var altitude = 0;
        var slope;    
        var valleys = 0;    

        for (var i = 0; i < input.length; i++) {

            slope = 0;           

            input[i] === "U" ? slope =  1 : 0;
            input[i] === "D" ? slope = -1 : 0;                        

            altitude += slope;

            if (altitude == 0 && slope == 1) { valleys += 1 }


            // console.log(input[i] + "<- Letter");
            // console.log(slope + "<- Slope");
            // console.log(altitude + " <- Altitude");
            // console.log(valleys + " <- Valleys");
            // console.log("");            
        }    
        
        if(altitude != 0) {throw "Final altitude has to be zero"};             
            
    }catch(e){

        console.log("Error:" + e.message);
    }

    return valleys;
}