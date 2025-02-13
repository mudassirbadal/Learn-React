import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handelDecrement = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
        <h1 className="text-4xl font-bold mb-8">Counter App</h1>
        <div className="bg-gray-700 p-6 rounded-xl shadow-lg w-80">
          <p className="text-3xl text-center mb-6">Count: {counter}</p>
          <div className="flex justify-around">
            <button
              className="bg-green-600 hover:bg-green-700 transition-colors duration-200 font-semibold py-2 px-6 rounded-lg"
              onClick={handleIncrement}
            >
              Increment
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 transition-colors duration-200 font-semibold py-2 px-6 rounded-lg"
              onClick={handelDecrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
