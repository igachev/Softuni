import { useState } from 'react'
import "./styles.css";
import Header from './components/Header';
import Footer from './components/Footer';
import UserList from './components/UserList';


function App() {

  return (
    <div>
 <Header />

 <main className='main'>
    <UserList />
 </main>

 <Footer />
    </div>
  )
}

export default App
