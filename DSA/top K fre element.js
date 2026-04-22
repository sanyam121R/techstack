function topKFrequent(nums, k) {
    const freq = new Map();
    for (const n of nums)
        freq.set(n, (freq.get(n) || 0) + 1);

    const bucket = Array.from({ length: nums.length + 1 }, () => []);
    for (const [num, count] of freq)
        bucket[count].push(num);

    const result = [];
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--)
        result.push(...bucket[i]);

    return result.slice(0, k);
}

topKFrequent([1, 1, 2, 23, 23, 2, 2, 2, 1, 23], 2)

[[], [], [], [1, 23, 2]]