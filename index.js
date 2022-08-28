function isPalindrome(word) {
  // Write your algorithm here
  let newWord = word.split('').reverse().join('')
  // console.log(newWord)
  if (newWord === word){
    return true
  } else{
    return false
  }

}

/* 
  Add your pseudocode here

 -take a  name
 -convert to an array
  -reverse
  -assign the reversed array to a new variable
  -convert back to a string
  -compare to the original namne
  -return true or false
*/

/*
  Add written explanation of your solution here

  -first used the split method to split the srring into an array
  -used the reverse method to rearrange the srray to the reversed arrangement
  -used the join method to convert the reversed array to string
  -compared the new string to the original string to see whether it still remains the same
  -returned the value

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
