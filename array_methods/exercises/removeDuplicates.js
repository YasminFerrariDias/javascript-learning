// Remove valores duplicados de um array usando reduce com includes e Set.
const nums = [5, 3, 5, 2, 3, 9];

function unique(nums) {
  console.log(nums)
  const result = nums.reduce((accumulator, value) => {
    return accumulator.includes(value) ? accumulator : [...accumulator, value]
  }, []);
  console.log(result)
}

function unique(nums) {
  const uniqueNumbers = new Set(nums)
  console.log(uniqueNumbers)
}

unique(nums)
