import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import Page from "../../components/Page";

const buttonBox = {
    display: 'flex',
    flexDirection: 'row',
    gap: '1.5em',
    marginBottom: '1.5em',
}
const apiBox = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
}

export default function DebugScreen() {
    const [output, setOutput] = useState("output");
    const [users, setUsers] = useState([]);

    //TODO: transfer to util file
    const fetchUsers = (event) => {
        event.preventDefault();
    
        //define request headers
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        };
    
        //define request parameters
        //TODO: handle roles
        const params = {
            role: "admin"
        }
        
        //use axios to make requests/talk to express backend
        axios.get(`http://localhost:3001/debug/users`, {params, axiosConfig})
            .then(response => response.data.users)
    
            //TODO: handle errors, alert snackboxes?
            .catch((err) => ([{error: err}]));
    };
    
    const handleFetchUsers = (event) => {
        console.log(fetchUsers(event));
        setUsers(fetchUsers(event));
        setOutput(`number of users: ${users.length}`);
    };

    return (
        <Page title="debug screen" subtitle="a screen for debugging/development purposes">
            <div style={buttonBox}>
                <Link to="/home">
                    <Button variant="outlined">home screen</Button>
                </Link>
                <Button variant="outlined">login screen</Button>
            </div>


            <div style={apiBox}>
                <Typography variant="h6">fetch api</Typography>
                <div style={buttonBox}>
                    <Button variant="outlined" onClick={(event) => handleFetchUsers(event)}>fetch users</Button>
                </div>
                <textarea rows="20" placeholder={output} />
            </div>
        </Page>
    )
}