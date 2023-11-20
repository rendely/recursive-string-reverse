function reverseString(str) {
  if (str.length <= 1) return str;

  const mid = Math.floor(str.length / 2);

  return reverseString(str.slice(mid)) + reverseString(str.slice(0,mid))
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString('hi'));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString('catbaby'));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*

If 1 character or no characters, return as-is
If 2 characters you swap them
If 3 characters you treat the first 2 characters first, and then swap that result with the next character
If 4 characters you swap the first 2, swap the last 2, and then swap those two sets
  help => eh, pl => pleh

*/