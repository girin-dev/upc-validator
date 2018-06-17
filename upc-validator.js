var upcValid = function(upc){
    var numList = upc.split('');
    var sumOdd = 0;
    var sumEven = 0;
    if (!(upc.length === 12)) return false;
    for (var i=0; i<upc.length; i++) {
        if (parseInt(upc[i]) === NaN){
            return false
        }
    }
    for (var i=0; i<(numList.length)/2; i++){
        sumOdd += parseInt(numList[2*i]);
        sumEven += parseInt(numList[2 * i + 1]);
    }
    if ((sumOdd*3+sumEven) % 10 === 0) {
        return upc;
    } else {
        return false
    }
}

console.log(upcValid('안녕하세요반갑습니다하이'));
console.log(upcValid('123456789101'));
console.log(upcValid('692771981161'));
console.log(upcValid('12345789101'));