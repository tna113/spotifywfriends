import { Container, FormControl, FormControlLabel, FormLabel, Input, InputLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const radioButtonStyle = {
    color: 'white',
};

export default function SearchBar() {
    const [type, setType] = useState("track");
    const handleTypeChange = (event) => {
        event.preventDefault();
        setType(event.target.value);
    };

    return (
        <Container>
            <Stack direction="column" spacing={2}>
                <FormControl fullWidth>
                    <InputLabel>Search</InputLabel>
                    <Input placeholder="Search" />
                </FormControl>

                <FormControl fullWidth>
                    <RadioGroup row defaultValue="track" name="search-type">
                        <FormControlLabel onChange={(event) => handleTypeChange(event)} sx={{...radioButtonStyle}} value="track" control={<Radio />} label={<Typography variant="caption">track</Typography>} />
                        <FormControlLabel onChange={(event) => handleTypeChange(event)} sx={{...radioButtonStyle}} value="artist" control={<Radio />} label={<Typography variant="caption">artist</Typography>} />
                        <FormControlLabel onChange={(event) => handleTypeChange(event)} sx={{...radioButtonStyle}} value="playlist" control={<Radio />} label={<Typography variant="caption">playlist</Typography>} />
                        <FormControlLabel onChange={(event) => handleTypeChange(event)} sx={{...radioButtonStyle}} value="show" control={<Radio />} label={<Typography variant="caption">show</Typography>} />
                        <FormControlLabel onChange={(event) => handleTypeChange(event)} sx={{...radioButtonStyle}} value="episode" control={<Radio />} label={<Typography variant="caption">episode</Typography>} />
                        <FormControlLabel onChange={(event) => handleTypeChange(event)} sx={{...radioButtonStyle}} value="audiobook" control={<Radio />} label={<Typography variant="caption">audiobook</Typography>} />
                    </RadioGroup>
                </FormControl>
            </Stack>
        </Container>
    )
}