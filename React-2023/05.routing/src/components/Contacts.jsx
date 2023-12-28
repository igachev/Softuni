import { useEffect } from "react"

export default function Contacts() {

useEffect(() => {
console.log('Mount or update')

const timeoutId = setTimeout(() => {
    console.log('2 seconds')
}, 2000);

return () => {
    clearTimeout(timeoutId)
    console.log('On unmount')
}
},[])

    return (
        <div>
            <h2>Contacts Page</h2>
            
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
            </div>
            
            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
            </div>

            <button type="submit">Submit</button>
        </div>
    )
}