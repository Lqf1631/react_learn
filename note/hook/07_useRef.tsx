import React, { useEffect, useRef } from 'react'

// useRef 参数传入 null 返回一对象,对象的 current 属性为获取的 dom
// 可以获取到 dom 以及类组件实例,从而访问到其上的属性或方法
// 需要再 jsx 的模板中为操作的标签设置 ref 属性绑定同名的 useRef 返回对象的属性值

// 与类组件区别:类组件为 createRef 函数且不用传值,其余一致

class Com extends React.Component {
  state: Readonly<{ name: string }> = {
    name: 'Tom',
  }
  render(): React.ReactNode {
    return <>Com</>
  }
}

function App() {
  const comRef = useRef(null)
  const divRef = useRef(null)
  useEffect(() => {
    console.log(comRef.current)
    console.log(divRef.current)
  }, [])
  return (
    <>
      <div ref={divRef}>App</div>
      <Com ref={comRef}></Com>
    </>
  )
}

export default App
