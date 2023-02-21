import React from 'react'

// 在类组件中约束 props 的类型时，在类组件继承 React.Component<Props> 将 Props 接口传入泛型
// 在类组件中设置默认 props 时，定义静态属性 static defaultProps 并约束其类型为 Props

interface Props {
  value?: string
}

class A extends React.Component<Props> {
  static defaultProps: Props = {
    value: '2',
  }
  render(): React.ReactNode {
    return <>{this.props.value}</>
  }
}

class App extends React.Component {
  state: Readonly<Props> = {
    value: '1',
  }
  render(): React.ReactNode {
    return (
      <>
        {/* <A value={this.state.value}></A> */}
        <A></A>
      </>
    )
  }
}
export default App
