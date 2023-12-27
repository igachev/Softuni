import { useState } from "react"

export default function ControlledForm() {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [age,setAge] = useState('')

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value)
    }

    const usernameBlurHandler = () => {
        console.log('on blur')
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setAge(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(username)
        console.log(age)
    }

    return (
        <>
        <h1>Controlled Form</h1>

        <form onSubmit={submitHandler}>
        
        <div>
        <label htmlFor="username">Username</label>
        <input 
        type="text" 
        name="username" 
        id="username"
        value={username} 
        onChange={usernameChangeHandler}
        onBlur={usernameBlurHandler}
        />
        </div>

        <div>
        <label htmlFor="age">Age</label>
        <input 
        type="number" 
        name="age" 
        id="age"
        value={age}
        onChange={ageChangeHandler}
        />
        </div>

        <div>
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        name="password" 
        id="password"
        value={password}
        onChange={passwordChangeHandler} 
        />
        </div>

        <div>
            <button type="submit">Register</button>
        </div>

        </form>

        </>
    )
}