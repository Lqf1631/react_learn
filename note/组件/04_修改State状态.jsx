// 组件的状态不能直接修改，需要采用覆盖的形式重写
// react 的 diff 算法是判断键是否重新指向其他值而非判断值是否变化
// 故再修改 state 时，需要将整个键值对修改，改变键指向，才能实现响应式数据

// 在事件绑定时，由于类的方法调用时不会绑定 this 值
// 1.故需要采用箭头函数的方式(组件创建时采用箭头函数，事件绑定时箭头函数包裹其调用)
// 设置事件处理函数为箭头函数，使其 this 指向父级的 render 函数的 this 为组件实例
// 2.在创建组件时，使用构造函数，绑定 this 值为组件实例

// react 中组件的状态仅能进行重写或重新赋值，不能进行直接修改

import React from 'react'
class State extends React.Component {
  // 采用箭头函数赋值的形式，实质为创建 change 的原型属性，属性值为一箭头函数
  // 在事件绑定时，可以利用箭头函数 this 指向父级 render 函数的 this 的组件实例
  change = () => {
    this.setState({
      // 对于原始值的状态，可以在 setState 内直接修改
      // 对于引用类型，需要重新赋值，进行重写，且不能修改原状态
      // 对于引用类型，如果需要增加或修改，可以配合解构操作符进行
      value: this.state.value.filter((item) => item !== 3),
      obj: {
        name: 'Jerry',
        age: '30',
      },
    })
  }
  state = {
    value: [1, 2, 3, 4, 5],
    obj: {
      name: 'Tom',
      age: '20',
    },
  }
  render() {
    return (
      <>
        <div>
          name: {this.state.obj.name} age: {this.state.obj.age}
        </div>
        {/* 使用箭头函数包裹，返回函数调用形式，使得 this 指向父级 render 函数的 this 为组件实例 */}
        <button onClick={() => this.change()}>change</button>
        <ul>
          {this.state.value.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    )
  }
}

function App() {
  return (
    <>
      <State></State>
    </>
  )
}
export default App
