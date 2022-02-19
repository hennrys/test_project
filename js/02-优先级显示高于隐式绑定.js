// var obj = {
//   name:'lhw',
//   foo: function(){
//     console.log(this)
//   }
// }

// call/apply显示绑定的优先级高于隐式绑定obj.foo()
// obj.foo.call('aaa')
// obj.foo.apply('aaa')

// bind 的优先级高于 隐式绑定
// obj.foo.bind('bbb')()
function foo(){
  console.log(this)
}
var obj = {
  name:'why',
  foo: foo.bind('aaa')
}
obj.foo()