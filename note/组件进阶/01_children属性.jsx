import React from 'react'

// children 属性：当在组件标签使用时，在标签内部的元素会被按顺序添加到 children 数组上
// children 数组会在该组件内挂载到 props 上，可以被组件内部访问到
// 即类似于 Vue 的插槽，在组件标签使用时，在标签内部添加元素传递给组件
// 类型可以为 jsx function html

function A({ children }) {
  // console.log(children)
  // children[2]()
  return (
    <div>
      this is A <br />
      {children.map((item) => item)}
    </div>
  )
}

class App extends React.Component {
  state = {
    value: 'App',
  }
  render() {
    return (
      <>
        <A>
          <div>this is div child</div>
          <p>this is {this.state.value}</p>
          {/* {() => {
            console.log('function')
          }} */}
        </A>
      </>
    )
  }
}
export default App
