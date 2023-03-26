// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	const reversedStr = str.split('').reverse().join('');
	return str === reversedStr;;
}
module.exports = palindrome
