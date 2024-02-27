import React, { useState } from "react";
import { Button, Stack, Paper, TextField, Typography } from "@mui/material";
import Page from "../../components/Page";

export default function ForgotPasswordScreen() {
    const [email, setEmail] = useState({
        value: "",
        err: false,
        errMsg: "",
    });

    const handleEmailChange = (event) => {
        setEmail({...email, value: event.target.value()})
    };

    return (
        <Page marginTop="medium" icon="🥲">
            <Typography variant="h3" sx={{width:'60%'}}>forgot password?</Typography>
            <Typography variant="caption">enter your email below and we will send you an email to reset your password if you are registered in the system</Typography>
            <Stack direction="column" spacing={4}>
                <TextField id="email" label="email" variant="outlined" size="normal" fullWidth autoFocus color="secondary" defaultValue="" error={email.err} onChange={(event) => {handleEmailChange(event)}} required />
                <Button variant="contained" sx={{height:'4em'}}>SUBMIT</Button>
            </Stack>
        </Page>
    )
}