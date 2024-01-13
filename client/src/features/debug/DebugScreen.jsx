import React from "react";
import { Button, Typography } from "@mui/material";
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
    return (
        <Page title="debug screen" subtitle="a screen for debugging/development purposes">
            <div style={buttonBox}>
                <Button variant="outlined">home screen</Button>
                <Button variant="outlined">login screen</Button>
            </div>


            <div style={apiBox}>
                <Typography variant="h6">fetch api</Typography>
                <div style={buttonBox}>
                    <Button variant="outlined">fetch users</Button>
                </div>
                <textarea rows="20">output</textarea>
            </div>
        </Page>
    )
}