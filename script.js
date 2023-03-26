// complete the given function

function palindrome(str){
	str = str.replaceAll(" ","");
	var reve = str.split('').reverse().join('');
	if(str == reve){
		return true;
	}
	return false;
}
module.exports = palindrome
