/**

Assignment 5: Algorithm Practice (Advanced Optional) 

Given an array of integers, return indices of the two numbers such that they add up to a specific target. 

You may assume that each input would have exactly one solution, and you may not use the same element twice.


************************************

    For example: 
        twoSum([2, 7, 11, 15], 9); 
    Should returns: 
        [0, 1] 
    Because: nums[0]+nums[1] is 9 

************************************/

//function twoSum(nums, target){
//         // your code here 
//}

function twoSum(nums, target) {
    const arrayTest = nums;
    const rightSum = target;

    for (let i = 0; i < arrayTest.length - 1; i++) {
        for (let j = 1; j < arrayTest.length; j++) {
            let testSum = arrayTest[i] + arrayTest[j];
            if (i !== j) {  //如果相加的是同一個數則不進行比較，直接進入下一次迴圈
                if (testSum === rightSum) {
                    return `[${i}, ${j}]`;
                }
            } 
        }
    }
    return `Error: No solution.`;   //如果陣列中所有的數都試過但沒有得到正解則回傳錯誤訊息
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 5, 4, 15], 16));
console.log(twoSum([2, 5, 4, 6], 8));
