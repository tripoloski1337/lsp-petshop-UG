import React from "react";
import { Link } from 'react-router-dom'

class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        localStorage.clear()
        window.location="/"
        return (
            <>
            a
            </>
        )
    }

}

export default Logout;