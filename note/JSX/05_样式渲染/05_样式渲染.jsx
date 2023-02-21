// 样式渲染
// 1.行内样式（内联样式）：直接在 html 标签上绑定 style 属性
// 可以直接在模板中设置，也可以抽离为一个 style 对象，在模板中绑定 style 对象

// 2.外部样式：在 html 标签上设置 className 的类名属性，再引入外部样式库
// 样式库中的选择器选择中 html 标签的类名
// ！！！注意：在 jsx 中的类名贴近于 js 采用 className 而非单纯 html 模板的 class

// 3.动态样式：可以类似选择渲染，动态添加类名

// 导入外部样式表
import './App.css'

// 设置 style 样式对象
const spanStyle = {
  color: 'pink',
  fontSize: '45px',
}

let flag = false

function App() {
  return (
    <div className="App">
      {/* 行内直接设置控制 */}
      <span style={{ color: 'red', fontSize: '30px' }}>111</span>
      {/* 行内抽离出 style 对象 */}
      <span style={spanStyle}>111</span>
      {/* 外部样式设置 className 类名 */}
      <span className="span">111</span>
      {/* 动态样式 */}
      <span className={flag ? 'span' : ''}>111</span>
    </div>
  )
}

export default App
