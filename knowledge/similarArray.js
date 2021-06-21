function args(n1,n2,n3){
	// 给类数组对象添加数组的slice方法
	const newArg = Array.prototype.slice.call(arguments)
	console.log('newArg slice', newArg.slice(0, 1))
}
args(1,2,3)