var obj = {
    name: "小明",
    age: 18
};
// enumerable 此属性是否可以被枚举（使用for...in或Object.keys()）。设置为true可以被枚举；设置为false，不能被枚举。默认为false。
// configurable 是否可以删除目标属性或是否可以再次修改属性的特性（writable, configurable, enumerable）。设置为true可以被删除或可以重新设置特性；设置为false，不能被可以被删除或不可以重新设置特性。默认为false。
Object.defineProperty(obj, "info", {
    get: function () {
        return "我是汪" + this.name + ", 都听我的";
    },
    set: function (nv) {
        this.name = nv;
    },
	enumerable: true,
	configurable: true
});
console.log(obj.info); // 我是汪小明，都听我的
obj.info = "总裁";
console.log(obj.info); // 我是汪总裁，都听我的