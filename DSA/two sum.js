function twoSum(nums, target) {
    const map = new Map();

    for(let i=0; i<nums.length ; i++) {
        const complement = target - nums[i];

        if (map.has(complement))
            return [map.get(complement), i];

        map.set(nums[i], i);
    }

    return [];
}


function subarraySum(nums, k) {
    const map = new Map();
    map.set(0, 1);

    let prefixSum = 0, count =0;

    for (const num of nums) {
        prefixSum += num;

        const complement = prefixSum - k;

        if (map.has(complement)) {
            count += map.get(complement);
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
}