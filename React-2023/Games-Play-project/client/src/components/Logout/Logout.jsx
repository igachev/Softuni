import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import * as userService from "../../services/userService.js"
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const {logoutHandler} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        userService.logout()
        .then(() => {
            logoutHandler()
            navigate('/')
        })
        .catch(() => {
            logoutHandler()
            navigate('/login')
        })
    },[])

    return null
}