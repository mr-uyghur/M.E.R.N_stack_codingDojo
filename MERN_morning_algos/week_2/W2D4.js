// https://leetcode.com/problems/two-sum/

//0(n)
function twoSumBetter(nums, target) {
    const map = {};

    // {'6': 1, '2': 2, '4': 3}


    // {name: "Brendan"}
    // "name" -> hashingmethod -> 2345678545678965456
    // [2345678545678965455, 2345678545678965456, 2345678545678965457]
    //                        "Brendan"
    // O(1)

    for (let i = 0; i < nums.length; i++) {
        let missingNumber = target - nums[i];
        if (map.hasOwnProperty(missingNumber)) { // 0(1)
            return [map[missingNumber], i];
        }
        map[missingNumber] = i;
        // {missingNumber: i}
    }
    return map;
}

console.log(twoSumBetter([2, 11, 7, 15],9))

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, no floats, and there may be duplicates

// [5, 5, 6]
// 10
// [0, 1]

// Given nums = [2, 11, 7, 15], target = 9,
// Because nums[0] + nums[2] = 2 + 7 = 9,
// return [0, 2].