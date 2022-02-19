// var obj = {
//   name: 'lhw',
//   foo: function(){
//     console.log(this)
//   }
// }
// var fn = new obj.foo()
// fn()

// new 关键字绑定优先级高于bind
function foo(){
  console.log(this)
}
var bar = foo.bind('aaa')
var fn = new bar()

// 总结: new绑定 > 显示绑定(apply/call/bind) > 隐式绑定(obj.foo()) > 默认绑定(独立函数直接调用)