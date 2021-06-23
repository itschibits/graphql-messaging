import React from 'react';
import { Link } from "react-router-dom";

function LandingPage() {
    return (<div className="LandingPage container text-center" >
        <h1>GraphQL Messagely</h1>
        <h4>Message Anyone Whenever You Want</h4>
        <Link to="/users/new" className="btn btn-primary font-weight-bold mr-3">New User</Link>
        <Link to="/messages/new" className="btn btn-primary font-weight-bold mr-3">New Message</Link>
    </div>)
}

export default LandingPage;