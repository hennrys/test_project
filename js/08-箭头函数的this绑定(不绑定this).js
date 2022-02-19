// 箭头函数不绑定this,它的内部相当于是没有this的,所以它会去上层作用域中找this
// var name = 'lhw'
// var foo = (num) => {
//   console.log(this)
//   console.log(num)
// }
// foo()

// var obj = {
//   foo: foo
// }
// obj.foo()
// foo.bind('aa')()
// foo.call('bbb',12)
// foo.apply('ccc',[1,2,3])


// 箭头函数出现之前异步操作处理数据的方法
// var obj = {
//   name: 'lhw',
//   data: [],
//   foo: function () {
//     var _that = this
//   发送网络请求,将结果放到上面data属性中
//     setTimeout(function () {
//       var result = ['aaa', 'bbb', 'ccc']
//       _that.data = result
//     }, 1000)
//   }
// }
// obj.foo()
// console.log(obj)

// 新增了箭头函数后的应用场景一
var obj = {
  name: 'lhw',
  data: [],
  foo: function () {
    // 发送网络请求,将结果放到上面data属性中
    setTimeout(() => {
      var result = ['aaa', 'bbb', 'ccc']
      this.data = result
    }, 1000)

  }
}
obj.foo()
console.log(obj)