import { useState } from "react"

export const usePersistedState = (key,defaultValue) => {

    const [state,setState] = useState(() => {
       const value = localStorage.getItem(key)
       if(value) {
        return JSON.parse(value)
       }
       else {
        return defaultValue
       }
    })

    const setPersistedState = (values) => {
        setState(values)
        let serializedValue = JSON.stringify(values)
        localStorage.setItem(key,serializedValue)
    }

    return [
        state,
        setPersistedState
    ]
}