function FlattenArray(arr) {
	return arr.map((v) => Array.isArray(v) ? FlattenArray(v) : v).flat()
}
console.log(FlattenArray([1,2,[3,4,[5,6]]]));