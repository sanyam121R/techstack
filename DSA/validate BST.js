function validateBST(){
    function dfs(node, min, max) {
        if (!node) return true;

        if (node.value <= min || node.value >= max) return false;

        return dfs(node.left, min, node.value) && dfs(node.right, node.value, max);
    }

    return dfs(root, -Infinity, Infinity);
}

validateBST()