/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { Stack } from "@mui/system";
import Page from "../../components/Page";
import getAccessToken from "../../utils/getAccessToken";

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

    //TODO: transfer to util file
    const fetchUsers = async (event) => {
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
            .then(response => {
                const jsonUsers = JSON.stringify(response.data.users);
                setOutput(jsonUsers);
            })
    
            //TODO: handle errors, alert snackboxes?
            .catch((err) => ([{error: err}]))
    };

    const fetchSongs = async (event) => {
        event.preventDefault();
    
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        };
    
        //TODO: handle roles
        const params = {
            role: "admin"
        }
        
        axios.get(`http://localhost:3001/debug/songs`, {params, axiosConfig})
            .then(response => {
                const jsonSongs = JSON.stringify(response.data.songs);
                setOutput(jsonSongs);
            })
    
            //TODO: handle errors, alert snackboxes?
            .catch((err) => ([{error: err}]))
    };

    //get access token
    const getToken = () => {
        const query = getAccessToken();
        query.then(response => {
            setOutput(response);
        })
    }

    return (
        <Page title="debug screen" subtitle="a screen for debugging/development purposes">
            <div style={buttonBox}>
                <Link to="/home">
                    <Button variant="outlined">home screen</Button>
                </Link>
                <Link to="/login">
                    <Button variant="outlined">login screen</Button>
                </Link>
                <Link to="/forgot">
                    <Button variant="outlined">forgot password</Button>
                </Link>
            </div>


            <div style={apiBox}>
                <Typography variant="h6">fetch api</Typography>
                
                <Stack direction='row' spacing={2}>
                    <div style={buttonBox}>
                        <Button variant="outlined" onClick={(event) => fetchUsers(event)}>fetch users</Button>
                    </div>

                    <div style={buttonBox}>
                        <Button variant="outlined" onClick={(event) => fetchSongs(event)}>fetch songs</Button>
                    </div>

                    <div style={buttonBox}>
                        <Button variant="outlined" onClick={() => getToken()}>fetch spotify token</Button>
                    </div>
                </Stack>

                <textarea rows="20" placeholder={output} />
            </div>
        </Page>
    )
}