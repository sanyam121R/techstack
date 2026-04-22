// Difficulty: Medium
// LeetCode Pattern: DFS

// Given an mxn binary grid which represents a map of ‘1’s (land) and ‘0’s (water), return the number of islands.

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]

// Output:
// 3


// 1. Clarify Requirement
//  - can the grid be empty?
//  - will it only contain's 0's and 1's?
//  - WIll 0's and 1's be integers or strings?

// 2. Discuss Approaches

// 1. use DFS
//    Logic :
//      - Itearate through every cell in the grid
//      - when a 1 (land) is found:
//          - Increment island count
//          - run DFS from this point

//      - During DFS:
//          - mark current cell as 0
//          - recurse up, down, left, right
//      - At the end, return island Count

//  Big O:
//      - Time: O(MxN)      - Space: O(MxN)



function dfs(grid, r, c) {
    if (
        r < 0 || r >= grid.length ||
        c < 0 || c >= grid[0].length ||
        grid[r][c] === "0"
    ) return

    // Mark visited
    grid[r][c] = "0"

    let area = 1
    area += dfs(grid, r + 1, c);
    area += dfs(grid, r - 1, c);
    area += dfs(grid, r, c + 1);
    area += dfs(grid, r, c - 1);

    return area;
}

function numberOfIsland(grid) {
    if (!grid) return 0;

    let islands = 0, maxArea = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === "1") {
                islands += 1;
                maxArea = Math.max(maxArea, dfs(grid, r, c));
            }
        }
    }

    return (islands, maxArea);
}

numberOfIsland([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
])