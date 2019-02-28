function minMaxSum(arr) {
    arr.sort((a, b) => a - b);
    var res=[0,0];

    for(i=0;i<arr.length-1;i++)
        res[0]+=arr[i];
    for (i = 1; i < arr.length; i++)
        res[1] += arr[i];    

    return res;
}