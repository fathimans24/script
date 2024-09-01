function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2 || num === 3) return true;  

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function checkFirstElementPrime(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    const firstElement = arr[0];

    if (typeof firstElement !== 'number') {
        return "First element is not a number";
    }

    return isPrime(firstElement) ?` ${firstElement} is a prime number `:` ${firstElement} is not a prime number`;
}


const arr = [13, 4, 6, 40];
console.log(checkFirstElementPrime(arr)); 

// second question
function mostFrequentItem(arr1) {
    if (arr1.length === 0) {
        return "Array is empty";
    }

    const frequencyMap = {};
    let maxCount = 0;
    let mostFrequent = null;

    for (let item of arr1) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
        if (frequencyMap[item] > maxCount) {
            maxCount = frequencyMap[item];
            mostFrequent = item;
        }
    }

    return `The most frequent item is '${mostFrequent}' with a count of ${maxCount}`;
}
const arr1 = [1, 1, 7, 2, 1, 7, 1, 7, 7];
console.log(mostFrequentItem(arr1));

//third question

for (let i = 0; i <16; i++) {
    if(i%2==0)
    {
        console.log(i+" :even");
    }
    else
    {
        console.log(i+" :odd");
    }
    
}
//fourth question


function sum_sq(arr2) {
     let sum=0;
    for (let i=0; i < arr2.length;i++) {
        sum +=arr2[i]*arr2[i];
        
    }
    return sum;
    
}
element=[5,8,9,2];
console.log('sum of array', sum_sq(element));