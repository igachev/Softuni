import { useState,useRef, useEffect } from "react"
import styles from "./ImprovedControlledForm.module.css"


export default function ImprovedControlledForm({
    formRef
}) {

    const usernameInputRef = useRef()

    const [formValues,setFormValues] = useState({
        username: '',
        age: '',
        password: '',
        gender: 'm',
        swimming: false,
        shopping: false,
        running: false
    })

    const [ageError,setAgeError] = useState('')

    const changeHandler = (e) => {
      //  console.log(e.target.name)
      //  console.log(e.target.value)
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const resetHandler = () => {
        setFormValues({
        username: '',
        age: '',
        password: '',
        gender: 'm',
        swimming: false,
        shopping: false,
        running: false
        })
    }
    
    const usernameBlurHandler = () => {
        console.log('on blur')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(formValues)
    }

    const ageValidator = () => {
        if(formValues.age < 0 || formValues.age > 120) {
            setAgeError('age should be between 0 and 120')
        }
        else {
            setAgeError('')
        }
    }

    const onCheckboxChange = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.checked
        }))
    }

    useEffect(() => {
        usernameInputRef.current.focus()
    },[])

    return (
        <>
        <h1>Controlled Form</h1>

        <form onSubmit={submitHandler} ref={formRef}>
        
        <div>
        <label htmlFor="username">Username</label>
        <input
        ref={usernameInputRef}
        type="text" 
        name="username"
        id="username"
        value={formValues.username} 
        onChange={changeHandler}
        onBlur={usernameBlurHandler}
        />
        </div>

        <div>
        <label htmlFor="age">Age</label>
        <input 
        type="number" 
        name="age"
        id="age"
        value={formValues.age}
        onChange={changeHandler}
        onBlur={ageValidator}
        />
        {ageError && (
            <p className={styles.errorMessage}>{ageError}</p>
        )}
        </div>

        <div>
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender" onChange={changeHandler} value={formValues.gender}>
                <option value="m">M</option>
                <option value="f">F</option>
            </select>
        </div>

        <div>
            <h3>Hobbies</h3>
            <label htmlFor="swimming">Swimming</label>
            <input type="checkbox" name="swimming" id="swimming" checked={formValues.swimming} onChange={onCheckboxChange} />
            <label htmlFor="shopping">Shopping</label>
            <input type="checkbox" name="shopping" id="shopping" checked={formValues.shopping} onChange={onCheckboxChange} />
            <label htmlFor="running">Running</label>
            <input type="checkbox" name="running" id="running" checked={formValues.running} onChange={onCheckboxChange} />
        </div>

        <div>
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        name="password" 
        id="password"
        value={formValues.password}
        onChange={changeHandler} 
        />
        </div>

        <div>
            <button type="submit">Register</button>
            <button type="button" onClick={resetHandler}>Reset</button>
        </div>

        </form>
        
        </>
    )
}