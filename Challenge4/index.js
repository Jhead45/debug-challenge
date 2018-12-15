// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = { }; 
    let maxChar = { char: '', val: 0}

    for (let char of str) {
        if (!charMap[char]) {
            charMap[char] = 1; 
        } else {
            charMap[char]++;
        }
    }

    for (let char of charMap) {
        if (charMap[char] > maxChar.val) {
            maxChar.val = charMap[char];
            maxChar.char = char;
        }
    }

    return maxChar;
}

console.log(maxChar('abcccccccd'));
