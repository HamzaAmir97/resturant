import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="flex flex-col items-start h-screen justify-center  bg-red-600 ">
      <div  className=' w-full  bg-blue-500  border-8 border-black'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo  " alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-center text-8xl text-amber-50'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center text-2xl font-serif text-sky-500">
        Click on the Vite and React logos to learn more
      </p>

      </div>
    </>
  )
}

export default App
