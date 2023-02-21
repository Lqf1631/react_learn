import { useScroll } from './hooks/useScroll'
import { useLocalStorage } from './hooks/useLocalStorage'
function App() {
  const [value, setValue] = useLocalStorage('hook-key', 'aaa')
  const [y] = useScroll()
  return (
    <div style={{ height: '1200px' }}>
      {y} {value} <button onClick={() => setValue('bbb')}>change</button>
    </div>
  )
}
export default App
