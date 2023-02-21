// 条件渲染：采用三元运算表达式进行选择渲染
// 采用 && 进行判断渲染，即满足条件才会渲染
const flag = false 

function App() {
  return (
    <div className="App">
      { flag ? <span>flag is true</span> : <span>flag is flase</span>}
      { flag && <div><h1>判断渲染</h1></div>}
    </div>
  )
}

export default App