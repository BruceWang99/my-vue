// Reflect
let onWatch = (obj, setBind, getLogger) => {
	let handler = {
		get(target, property, receiver) { getLogger(target, property)
			return Reflect.get(target, property, receiver);
		},
		set(target, property, value, receiver) { 
			setBind(value);
			return Reflect.set(target, property, value);
		}
	};
	return new Proxy(obj, handler);
};
let obj = { a: 1, b: 5 } 
let p = onWatch(obj, (v) => { 
	console.log('value', v)
}, 
(target, property) => {
	console.log(`Get '${property}' = ${target[property]}`);
})
p.b = 2 // bind `value` to `2`
p.b // -> Get 'a' = 2
