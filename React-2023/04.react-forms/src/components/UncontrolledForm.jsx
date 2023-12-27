
export default function UncontrolledForm() {

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log(formData.get('username'))
        console.log(formData.get('password'))
    }

    return (
        <>
        <h1>Uncontrolled Form</h1>

        <form onSubmit={submitHandler}>
        
        <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        </div>

        <div>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" />
        </div>

        <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        </div>

        <div>
            <button type="submit">Register</button>
        </div>

        </form>

        </>
    )
}