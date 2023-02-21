// 逻辑精简：对于模板中的复杂逻辑，可以在 js 中使用函数封装实现逻辑，在模板中调用函数即可
const getHTag = (type) => {
  if(type === 1) return <h1>h1</h1>
  if(type === 2) return <h2>h2</h2>
  if(type === 3) return <h3>h3</h3>
}


function App() {
  return (
    <div className="App">
      {getHTag(1)}
      {getHTag(2)}
      {getHTag(3)}
    </div>
  )
}

export default App