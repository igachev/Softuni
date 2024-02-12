import { useState } from "react"

export const useForm = (defaultValues,submitHandler) => {

    const [values,setValues] = useState(defaultValues)

    const onChange = (e) => {
        e.preventDefault()
        setValues((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        submitHandler(values)
    }

    return {
        values,
        onChange,
        onSubmit
    }
    
}