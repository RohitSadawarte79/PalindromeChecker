/**
 * Retrieves the value of the input element.
 * 
 * @returns {string} The value of the input element.
 */
const form = document.querySelector('form');
const input = document.getElementById('input');
const result = document.getElementById('result');




function isPalindrome(event) {
    event.preventDefault();
    const str = input.value.trim();
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleanedStr.split('').reverse().join('');
    if (cleanedStr=== reversed) {
        result.innerText = `${str} is a palindrome`;
    } else {
        result.innerText = `${str} is not a palindrome`;
    }
}


form.addEventListener('submit', isPalindrome);

