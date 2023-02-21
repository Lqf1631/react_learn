// 子组件向父组件传值
// 在父组件中设置函数，将函数传递给子组件，在函数中操作形参值
// 在子组件中调用父组件传递来的函数，将传递数据作为实参传入，传递给父组件

function Son({ fn }) {
  const data = 'Son value'
  return (
    <>
      {/* 由于调用 fn 时需要传参，故在事件绑定时采用函数柯里化 */}
      this is Son <button onClick={() => fn(data)}>send</button>
    </>
  )
}

function App() {
  // 变量用于存储子组件传递来的值
  let msg = ''
  // fn 函数，形参接受子组件传递值
  const fn = (data) => {
    msg = data
    console.log(msg)
  }
  return (
    <>
      {/* 自定义属性，父组件传递给子组件 fn */}
      <Son fn={fn}></Son>
    </>
  )
}
export default App
