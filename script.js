function reverseString(str) {
    str = String(str);
    let original = Array.from(str);
    let opposite = [];
    for(let i = 0; i < original.length; i++) {
        opposite.unshift(original[i]);
    }
    opposite = opposite.join('').trim();
    return opposite;
}