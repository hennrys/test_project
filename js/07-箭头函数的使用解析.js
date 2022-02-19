var nums = [10, 20, 45, 78]

// 1.编写箭头函数
// var foo = (item) => {
//   console.log(item)
// }
// nums.forEach(foo, nums)

// 高阶函数在使用时,也可以传入箭头函数
// nums.forEach((item, index) => {
//   console.log(item, index)
// })

// 箭头函数有一些常见的简写:
// 简写: 如果只有一个参数,()可以简写
// nums.forEach(item => {
//   console.log(item)
// })

// 简写二: 如果函数执行体只有一行代码,那么{}也可以省略
// 强调: 并且它会默认将这行代码的执行结果作为返回值
// console.log(typeof console.log())
// var i = nums.forEach(item => console.log(item))
// var arr = nums.filter((item) => item % 2 === 0)
// console.log(arr)
// var numbers = [4, 3, 5, 10, 1000, 32, 21]
// var newN = numbers.sort((a, b) => b - a)
// console.log(newN)
// var result = nums.filter(item => item % 2 === 0)
//                 .map(item => item * 100)
//                 .reduce((preValue,item) => preValue + item)
// console.log(result)

// 简写三: 如果一个函数的返回值是一个对象,
// 那么箭头函数的{}省略时需要给对象的大括号{}外面加一个小括号()
// var foo = () => {
//   return { name:'lhw', age:18 }
// }
// var foo = () => ({ name: 'lhw', age: 18 })
// console.log(foo())


