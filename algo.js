var testArr = [6,3,5,1,2,4];
var sum = 0;
function valueSum(){
    for(var i = 0; i < testArr.length; i++){
            sum = sum + testArr[i];
            alert(i);
            console.log("num: " + testArr[i], "sum: " + sum)
        }
    
}

var testArr = [6,3,5,1,2,4];
var sum = 0;
function valuePos(){
    for(var i = 0; i < testArr.length; i++){
        sum =testArr[i] * i;
        alert(i);
        console.log(sum)
    }
}



