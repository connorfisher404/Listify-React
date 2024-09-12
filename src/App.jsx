import { useState } from 'react'


import Header from './components/Header'
import Input from './components/Input'
import Items from './components/Items'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col'>
        <Header />
        <Input/>
        
      </div>
      
    </>
  )
}

export default App
