const sumAll = function(num1, num2) {
    let largestNum, smallestNum, sum=0;
    if((typeof num1==='number' && typeof num2==='number') && (num1>=0 && num2>=0)){
        if(num1 > num2) {
            largestNum = num1;
            smallestNum = num2;
        }
        else {
            largestNum = num2;
            smallestNum = num1;
        }
        for(let i=smallestNum; i<=largestNum; i++){
            sum+=i;
        }
        return sum;
    }
    else return 'ERROR'
};

// Do not edit below this line
module.exports = sumAll;
