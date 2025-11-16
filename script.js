function firstNonRepeatedChar(str) {
  const freq = {};

  // Count frequency of each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find first character with frequency 1
  for (let char of str) {
    if (freq[char] === 1) {
		
      return char;
    }
  }

  return null; // no non-repeated character
}


const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
