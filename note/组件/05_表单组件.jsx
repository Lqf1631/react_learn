import React, { createRef } from 'react'

// 受控表单：表单的 value 值与组件的 state 值进行双向绑定
// 对 value 值设置未 state 并且在表单上绑定 change 事件，修改 value 值对应修改 state 值
class InputComponent extends React.Component {
  state = {
    msg: 'this is message',
  }
  changeMsg = (e) => {
    this.setState({
      msg: e.target.value,
    })
  }
  console = () => {
    console.log(this.state.msg)
  }
  render() {
    return (
      <input
        type="text"
        value={this.state.msg}
        onChange={this.changeMsg}
        onBlur={this.console}
      />
    )
  }
}

// 非受控表单：表单的 value 值与组件的 state 值无关
// 采用 dom 操作获取表单的 value 值
// 调用 createRef 创建 ref 对象存储 dom ，在模板中设置 ref 属性对应获取 dom 对象
// ！！！！注意：在 ref.current 对象中获取 dom

class Uncontrol extends React.Component {
  msgRef = createRef()
  getMsg = () => {
    if (this.msgRef.current.value) {
      console.log(this.msgRef.current.value)
    } else {
      console.log(null)
    }
  }
  render() {
    return <input type="text" ref={this.msgRef} onBlur={this.getMsg} />
  }
}

function App() {
  return (
    <>
      <InputComponent></InputComponent>
      <Uncontrol></Uncontrol>
    </>
  )
}
export default App
