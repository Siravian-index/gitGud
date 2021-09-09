// a simple function

const filterOddNumbers = (arr) => {
  return arr.filter((ele) => ele % 2 === 0);
}

const arrayTest = [1,2,3,4,5,6,7,8]

console.log(filterOddNumbers(arrayTest))