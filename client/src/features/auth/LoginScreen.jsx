import React, { useState } from "react";
import { Button, Container, FormControl, FormLabel, Input, InputLabel, Stack, TextField, Typography } from "@mui/material";
import Page from "../../components/Page";

const inputStyles = {
    color: 'black',
};

export default function LoginScreen() {
    const [username, setUsername] = useState({
        value: "",
        err: false,
        errMsg: "",
    });

    const handleUsernameChange = (event) => {
        setUsername({...username, value: event.target.value()})
    };

    const [password, setPassword] = useState({
        value: "",
        err: false,
        errMsg: "",
    });

    const handlePasswordChange = (event) => {
        setPassword({...password, value: event.target.value()})
    };

    return (
        <Page marginTop="large">
            <Container>
                <Stack direction="column" spacing={4}>
                    <Typography variant="h1">login</Typography>
                    <Stack direction="column" spacing={4}>
                        <TextField id="username" variant="filled" size="normal" fullWidth autoFocus color="secondary" sx={{...inputStyles}} label="username" defaultValue="" error={username.err} onChange={(event) => {handleUsernameChange(event)}} required />
                        <TextField id="password" variant="filled" size="normal" fullWidth autoFocus color="secondary" sx={{...inputStyles}} label="password" defaultValue="" error={password.err} onChange={(event) => {handlePasswordChange(event)}} required />
                    </Stack>

                    <Button variant="contained" sx={{height: '4em'}}>SUBMIT</Button>

                    <Stack direction="column" spacing={0}>
                        <Button variant="text">Forgot Password?</Button>
                        <Button variant="text" sx={{color:'grey', fontSize: '0.8em'}}>New user</Button>
                    </Stack>
                </Stack>
            </Container>
        </Page>
    )
}