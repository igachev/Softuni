import { useNavigate } from "react-router-dom"

const withNavigate = (Component) => {
    const WrapperComponent = (props) => {
        const navigate = useNavigate()
        return <Component {...props} navigate={navigate} />
    }
    return WrapperComponent
}

export default withNavigate