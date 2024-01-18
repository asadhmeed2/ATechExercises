const {add,calculateHyp} = require('./code')

test("add should return sum of a + b", () => {
	    let sum = add(1, 2)
	    expect(sum).toBe(3)
})

test("calculateHyp should return the square root of num1 + num2", () => {
	    let sqrt = calculateHyp(3, 4)
	    expect(sqrt).toBe(5)//
})

