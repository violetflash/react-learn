import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errMsg: '',
    }

    //Method that receives potential error and some additional info passed by React automatically
    componentDidCatch(error, errorInfo) {

    }

    render() {
        return <h1>Something went wrong</h1>
    }
}

export default ErrorBoundary;
