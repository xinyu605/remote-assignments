/**
 *
 * Assignment 1: Function and Array
 *
 * Complete the function below to find the max number of the passing array of numbers. 
 *
 * Reminder: you cannot use built-in Math.max() or sort() to complete this assignment.
 *
 * 1. max([1, 2, 4, 5]); // result to 5 
 * 2. max([5, 2, 7, 1, 6]); // result to 7
 */


function max(numbers) {
    // your code here, for-loop method preferred

    for(let i = 0; i < numbers.length; i++) {

        if (numbers[i] > numbers[i + 1]) {  //如果左邊的值比右邊的值大就交換位置，最大的值最後會排在最右邊
            let temp = numbers[i]; 
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = temp;
        }

    }
    const lastOne = numbers.length - 1; //取陣列最後一個index值
    return numbers[lastOne];
}

const array1 = [1, 2, 4, 5];
console.log(max(array1));   //result to 5

const array2 = [5, 2, 7, 1, 6];
console.log(max(array2));   //result to 7

