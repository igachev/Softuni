import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import movies from './assets/movies'
import Timer from './components/Timer'
import Counter from './components/Counter'



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <h1>My first dynamic React app</h1>
      <Timer startTime={5} />
      <MovieList movies={movies} headingText="Movie List" />
      <Counter />
    </div>
  )
}

export default App
