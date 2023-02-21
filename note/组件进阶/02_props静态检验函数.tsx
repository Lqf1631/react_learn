// 在 props 使用过程中，尤其需要注意使用静态检验，避免父组件传值错误
// 使用 tsx 替代 jsx 进行类型约束，实现静态检验
// 通过 ts 语法 ? 设置可选参数，形参声明时配合 = 实现默认参数

interface obj {
  value: string
}

interface Props {
  arr: Array<number>
  // 可选参数，可以传递 obj
  obj?: obj
}

function A() {
  const arr: Array<number> = [1, 2, 3, 4]
  const obj: obj = { value: 'Jerry' }
  return (
    <>
      this is A <br />
      <B arr={arr} obj={obj}></B>
    </>
  )
}
// 设置默认值，先利用 interface 约束其为可选参数，再设置其默认值
function B({ arr, obj = { value: 'Tom' } }: Props) {
  return (
    <>
      {obj?.value} <br />
      this is B <br />
      {arr.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </>
  )
}

export default A
