function hasTargetSum(array, target) {
  // Write your algorithm here
    const seenNumbers = new Set(); // initialize an empty Set
    for (const number of array) {
      const complement = target - number;
  
      // .has returns true if the Set includes the complement
      if (seenNumbers.has(complement)) return true;
  
      // .add adds the number to the Set
      seenNumbers.add(number);
    }
    return false;
}

/* 
  Write the Big O time complexity of your function here
Time complexity: O(n)
Space complexity: O(n)
*/

/* 
  Add your pseudocode here
  First initialize an empty Set
  Then loop through each number in the array
  inside the for loop calculate the complement of the current number
  Then we have condition to check if the Set includes the complement
*/

/*
  Add written explanation of your solution here
  The function checks if the complement
  is already in the Set using the ".has" method
  If it is, then it means that there are two
  numbers in the array that add up to the target
  so the function returns true , otherwise return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
