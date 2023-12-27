import { useRef } from "react"
import "./App.css"
import ControlledForm from "./components/ControlledForm"
import ImprovedControlledForm from "./components/ImprovedControlledForm"
import UncontrolledForm from "./components/UncontrolledForm"

function App() {
 
  const formRef = useRef()

  return (
  <>
  {/*<UncontrolledForm />*/}
  {/* <ControlledForm /> */}
  <ImprovedControlledForm formRef={formRef} />
  <button type="submit" onClick={() => formRef.current.requestSubmit()}>Submit</button>
  </>
  )
}

export default App
