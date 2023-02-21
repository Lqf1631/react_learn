// 事件绑定
// 函数事件绑定:在函数中定义事件处理函数, this 指代不明
// 类事件绑定:在类中采用箭头函数赋值形式定义事件处理函数,在模板中调用 this 访问, this 指代类组件实例
// 在事件绑定时, on+Name={fun} {}内为函数本身

// 事件参数传递:默认参数为事件对象 e ,直接在事件处理函数中接受
// 自定义参数,在事件绑定时,处理函数作为箭头函数的返回值,箭头函数向处理函数传递事件对象 e

import React from 'react'
function FunctionComponent() {
  // 在函数组件中使用函数形式定义事件处理函数
  const onClickHanlder = () => {
    // 在函数组件中事件处理函数中的 this 为 undefined
    console.log('click', this)
  }
  // 事件绑定采用 on+事件名 的驼峰形式，{} 内为事件处理函数，为一函数而非函数调用
  return <div onClick={onClickHanlder}>函数组件</div>
}
class ClassComponent extends React.Component {
  // 在类组件中,使用箭头函数赋值类的原型方法来定义事件处理函数
  // 以此形式定义的事件处理函数 this 指代该类组件的实例
  // 而直接采用方法形式定义, this 值为 undefined

  // 事件对象是以默认参数 e 形式传入事件处理函数
  onClickHanlder = (e, msg) => {
    console.log('Click', this, e, msg)
  }
  render() {
    // 在事件绑定中采用 this.handler
    // 当有自定义参数时,采用箭头函数包裹事件处理函数进行事件绑定,事件处理函数作为箭头函数的返回值
    // 外部箭头函数传递 e 给事件处理函数
    // 事件处理函数接收外部箭头函数的参数 e 和自定义参数
    return <div onClick={(e) => this.onClickHanlder(e, 'aaa')}>类组件</div>
  }
}
function App() {
  return (
    <>
      <FunctionComponent></FunctionComponent>
      <ClassComponent></ClassComponent>
    </>
  )
}
export default App
