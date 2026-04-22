// input - abcabcbb
// output - abc


// Sliding window

function longestSubstring(s) {
    const hashMap = new Map();
    let left = 0;
    let maxStrLength = 0;

    for (let right = 0; right < s.length; right++) {
        const character = s[right];

        if (hashMap.has(character) && hashMap.get(character) >= left)
            left = hashMap.get(character) + 1;

        hashMap.set(character, right);
        maxStrLength = Math.max(maxStrLength, right - left + 1);
    }

    return maxStrLength;
}

longestSubstring("abcabcbb");