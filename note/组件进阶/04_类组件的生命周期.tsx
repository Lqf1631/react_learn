// 类组件的生命周期以及对应的生命周期钩子函数
// 生命周期:挂载-更新-卸载

// 挂载:实例化 constructor 渲染 render 挂载完成 componentDidMount
// constructor:仅在组件初始化时执行一次,一般用于对 props 的操作
// render:当页面渲染时执行,首次和更新渲染均会执行
// componentDidMount:组件挂载完成时执行一次,常用于请求数据,操作 DOM

// 更新:渲染 render 更新完成 componentDidUpdate
// componentDidUpdate:组件完成更新渲染时执行

// 卸载:卸载完成前 componentWillUnmount
// 一般用于清除副作用

// 注意:涉及页面更新的生命周期不能调用 setState 否则会相互无限调用造成栈溢出
// 在 render 之后页面渲染完成才能进行副作用操作

import React, { createRef, LegacyRef } from 'react'

interface Props {
  name?: string
}

class Test extends React.Component<Props> {
  // constructor 实例化钩子函数,一般用于设置 props
  constructor(props: Props) {
    super(props)
    console.log('constructor')
  }

  state: Readonly<{ age: number }> = {
    age: 20,
  }
  // 定义 br 用于存储 DOM br
  br = createRef() as LegacyRef<HTMLBRElement>
  timer: any = null

  // componentDidMount 组件挂载完成,可以发起请求或操作 DOM 等副作用
  componentDidMount() {
    console.log('componentDidMount')
    // 发起请求
    fetch('http://localhost:3000').then((res) => {
      console.log(res)
    })
    // 操作 DOM
    console.log(this.br)
    // 设置定时器
    this.timer = setInterval(() => {
      console.log('timer')
    }, 1000)
  }

  // componentDidUpdate 组件更新渲染完成,可以进行副作用操作如 DOM 操作
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  // componentWillUnmount 组件卸载完成,对组件的副作用进行清除
  componentWillUnmount() {
    // 清除定时器即清除副作用
    clearInterval(this.timer)
    console.log('componentWillUnmount')
  }

  // render 渲染钩子函数,仅执行页面渲染功能,将返回值的 jsx 模板渲染到页面
  render(): React.ReactNode {
    console.log('render')
    return (
      <>
        Test <br ref={this.br} />
        {this.props.name} {this.state.age} <br />
        <button onClick={() => this.setState({ age: this.state.age + 1 })}>
          +1
        </button>
      </>
    )
  }
}

class App extends React.Component {
  state: Readonly<{ flag: boolean }> = {
    flag: true,
  }
  render(): React.ReactNode {
    return (
      <>
        App <br />
        {this.state.flag ? <Test></Test> : null} <br />
        <button onClick={() => this.setState({ flag: !this.state.flag })}>
          change
        </button>
      </>
    )
  }
}

export default App
