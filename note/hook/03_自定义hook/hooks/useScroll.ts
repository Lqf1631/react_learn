import { useState } from "react"

// useScroll 函数,仅返回状态值,且值为滚动条距离顶部位置

export function useScroll() {
  const [y, setY] = useState(0)
  window.addEventListener('scroll', () => {
    setY(document.documentElement.scrollTop)
  })
  return [y]
}