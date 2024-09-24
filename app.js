function ReveresedString(word){
    let array = word.split("");
    const newArrray= array.reverse();
    
    const newWord = newArrray.join("");

    console.log(newWord);
}

function IsPalindrome(word){
    let array = word.toLocaleLowerCase().split("");
    const newArrray= array.reverse();

    if(newArrray.join("") === word.toLocaleLowerCase()){
        console.log(`${word} is a palindrome`);
    }
    else{
        console.log(`${word} is not a palindrome`);
    }
}

function fizzBuzz(){
    for(let i = 1; i !== 101; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('number')
        }
        else if(i % 3 === 0){
            console.log('Fizz');
        }
        else if(i % 5 === 0){
            console.log('Buzz');
        }
        else{
            console.log('FizzBuzz');
        }
    }
}

function SplitArrayIntoChunks(chunkLimit, array){
    let newArray = [];
    let OldTempArray = [];
    let startIndex = 0;
    let endIndex = chunkLimit;

    while(startIndex < array.length){
        let TempArray = [];
        TempArray = array.slice(startIndex ,endIndex);
        if(OldTempArray.length > 0){
            newArray = [...OldTempArray, TempArray];
        }
        else {
            newArray = [TempArray];
        }
        OldTempArray = [...newArray];
        startIndex = endIndex;
        endIndex += chunkLimit; 
    }
    console.log(newArray);
}

function deepClone(original){
    const clone = structuredClone(original);
    return clone;
}

const original = {
    name: "John",
    age: 30,
    nested: {
        hobbies: ["reading", "gaming"],
        address: {
            city: "New York",
            zip: "10001"
        }
    }
};

const cloned = deepClone(original);
cloned.nested.hobbies.push("cooking");

//console.log('Orginal', original.nested.hobbies); // should output ["reading", "gaming"]
//console.log('Clone', cloned.nested.hobbies);  

//this method is wrong according to the test 
function mergeSortedArrays(array1, array2){
    let newArray = [...array1, ...array2];
    newArray.sort(); // this only sorts strings not numbers in strings the numbers 10 and 2 would be sorted as 10 comes before 2 as strings.
    return newArray;
}

//correct answer is: 
function mergeSortedArrays2(array1, array2) {
    const mergedArray = [];
    let i = 0, j = 0;

    // Traverse both arrays
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            mergedArray.push(array1[i]);
            i++;
        } else {
            mergedArray.push(array2[j]);
            j++;
        }
    }

    // If there are remaining elements in array1
    while (i < array1.length) {
        mergedArray.push(array1[i]);
        i++;
    }

    // If there are remaining elements in array2
    while (j < array2.length) {
        mergedArray.push(array2[j]);
        j++;
    }

    return mergedArray;
}

const sortedArray2 = mergeSortedArrays2([1, 3, 5], [2, 4, 6]);
//console.log(sortedArray); // should output [1, 2, 3, 4, 5, 6]

const sortedArray = mergeSortedArrays([1, 3, 5, 10], [2, 4, 6]); 
//console.log(sortedArray);

function rotateArray(array = [], RotateValue){
    let count = 0;
    while(count < RotateValue){
        let arrayValue = array.pop();
        array.unshift(arrayValue);
        count++;
    }
    return array;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

SplitArrayIntoChunks(3, [1,2,3,4,5,6,7]);

fizzBuzz();

IsPalindrome('mom');

IsPalindrome('Jack');

ReveresedString('hello');

