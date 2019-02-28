/*
    28/02/2019:
    Con algunos cambios, este codigo resuelve este problema
    https://www.hackerrank.com/challenges/sock-merchant/problem

*/

function uniq(a) {
    var res = copiarArray(a);
    return res.sort().filter(function (item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}

function copiarArray(arr) {
    length = arr.length;
    var res = new Array(length)

    for (var i = 0; i < length; i++)
        res[i] = arr[i];

    return res;
}
function sort(arr) {
    var res = copiarArray(arr);
    return res.sort();
}

function repeticiones(unicos, input) {
    // var rep = copiarArray(unicos);
    var rep = [];

    for (var i = 0; i < unicos.length; i++) {
        rep[i] = 0;
        for (var j = 0; j < input.length; j++) {
            if (unicos[i] == input[j])
                rep[i] += 1;
        }
    }

    return rep;

}

function pares(rep) {
    var pares = [];

    for (var i = 0; i < rep.length; i++) {
        pares[i] = Math.floor(rep[i] / 2);
    }

    return pares;
}

function sumArray(ar) {
    var sum = 0;

    for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    return sum;
}

function sockMerchant(input) {    

    var inputOrdenado = sort(input);

    var unicos = uniq(input);

    var rep = repeticiones(unicos, input)

    var _pares = pares(rep)

    var suma = sumArray(_pares);
    
    // console.log(input + " <- Input");
    // console.log(inputOrdenado + " <- Input Ordenado ");
    // console.log(unicos + " <- Unicos ");
    // console.log(rep + " <- Repeticiones ");
    // console.log(_pares + " <- Pares ");
    // console.log(suma + " <- Suma ");

    return suma;    
    
    
    
}
/*Notas cuando suba el codigo a HackerRank
    -la funcion sockmerchant tiene un argumento mas de la que esta aca
    */