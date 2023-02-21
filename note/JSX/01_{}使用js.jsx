// 1. html 模板内使用 {} 来使用 js 表达式（注意：js 语句）
// 变量
const name = 'aa'
// 函数调用
const getAge = () => 18
// 三元表达式
let flag = false

function App() {
  return (
    <div className="App">
      <p>{name}</p>
      <p>{getAge()}</p>
      <p>{flag ? 'yes' : 'no'}</p>
    </div>
  )
}

export default App
