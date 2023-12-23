
import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Starwars from './Starwars'

function App() {
 const [numbers,setNumbers] = useState([1,2,3,4,5])
 const [count,setCount] = useState(0)

 useEffect(() => {
  console.log('mount component')
 },[])

 useEffect(() => {
  console.log('update component - numbers')
 },[numbers])

 useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000);
 },[])

  let removeLast = () => {
    setNumbers((oldState) => oldState.slice(0, numbers.length - 1))
  }

  return (
    <div>
      <Starwars />
      <h4>Count: {count}</h4>
    <ul >
      {numbers.map((n,index) =>
      <li key={index} className={styles.listItem}>
        {n * 2}
        </li>
      )}
    </ul>
    <button onClick={removeLast}>Remove Last</button>
    </div>
  )
}

export default App
