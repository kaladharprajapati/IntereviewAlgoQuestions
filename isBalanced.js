// Good morning! Here's your coding interview problem for today.
// This problem was asked by Google.
// You're given a string consisting solely of (, ), and *. * can represent either a (, ), or an empty string. Determine whether the parentheses are balanced.
// For example, (()* and (*) are balanced. )*( is not balanced.


let isBalancedBool = true;

function isBalanced(str, i = 0, j = str.length - 1) {
    if (i >= j) return;

    if ((str[i] === "(" || str[i] === "*") && (str[j] === ")" || str[j] === "*")) {
        isBalanced(str, i+1, j-1);
    } else {
        isBalancedBool = false;
    }
}


isBalanced("()()")
console.log(isBalancedBool) /*?*/
