function firstChar(text) {
  // your code here
	let s = text.trim();
	return s.length>0?s[0]:'';
} 

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
