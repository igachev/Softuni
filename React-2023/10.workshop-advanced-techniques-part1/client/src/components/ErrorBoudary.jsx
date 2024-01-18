import { Component } from "react";

export default class ErrorBoundary extends Component {

    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(err) {
        console.log('GetDerivedState')
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
        //TODO: logging
    }

    render() {

        if(this.state.hasError) {
            return <h3>404</h3>
        }

        return this.props.children
    }
}