// 循环渲染
// 循环渲染的数据格式为数组，调用数组的 map 方法，返回 html 标签，实现对标签的循环渲染
// 循环渲染时，数据列表需要设置 id 属性，且在标签内设置 key 属性，优化 diff 算法
// key 属性仅设置在虚拟 DOM 中，在实际的 DOM 结构中不具备，仅作为优化 diff 算法使用
const list = [
  { id: 0, name: 'Tom' },
  { id: 1, name: 'Jerry' },
  { id: 2, name: 'Mike' },
]

function App() {
  return (
    <div className="App">
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
