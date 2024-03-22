function searchInsert(nums, target) {
   
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid; 
        } else if (nums[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    
    return left; 
}

let testCaseOne   = searchInsert([1,7,3,5,6,9,15], 5);
let testCaseTwo   = searchInsert([5,6,1,3], 2);
let testCaseThree = searchInsert([1,3,5,6], 7);

console.log(testCaseOne); 
console.log(testCaseTwo); 
console.log(testCaseThree); 


