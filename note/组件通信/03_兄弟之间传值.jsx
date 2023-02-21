import React from 'react'

// 兄弟组件传值：找到兄弟组件的公共父组件
// 子组件向父组件传值，父组件向其兄弟组件传值，实现兄弟组件传值

function SonA({ fn }) {
  let valueA = 'this is A'
  return (
    <>
      <p>this is SonA</p>
      <button onClick={() => fn(valueA)}>传递</button>
    </>
  )
}
function SonB({ value }) {
  return (
    <>
      <p>this is SonB</p> {value}
    </>
  )
}

class App extends React.Component {
  state = {
    // 变量 value 接受组件 A 传值
    value: '',
  }
  // fn 方法将 A 中数据赋值给变量 value
  fn = (data) => {
    this.setState({
      value: data,
    })
  }
  render() {
    return (
      <>
        {/* 向 A 组件中传递 fn 方法，A 组件调用 fn 方法，将其中数据传递给 App */}
        <SonA fn={this.fn}></SonA>
        {/* 向 B 组件中传递用于存储 A 组件传来的数据的 value 变量 */}
        <SonB value={this.state.value}></SonB>
      </>
    )
  }
}
export default App
