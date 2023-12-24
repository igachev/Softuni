import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import ToDoList from './components/ToDoList'


function App() {
  

  return (
   <div>
     
  <Header />

  
  <main className="main">

    <ToDoList />
  </main>

  
  <Footer />
   </div>
  )
}

export default App
