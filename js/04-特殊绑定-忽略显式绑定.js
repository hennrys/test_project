function foo(){
  console.log(this)
}
// foo.apply('aaa')
// foo.apply({})
// foo.apply(undefined)
// foo.apply(null)

//  apply/call/bind: 当传入null/undefined/时,自动将this绑定成全局对象
// var bar = foo.bind(null)
// var bar = foo.bind(undefined)
// bar()
foo.bind(null)()
foo.bind(undefined)()


