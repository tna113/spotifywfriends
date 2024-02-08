import { Container, FormControl, FormControlLabel, FormLabel, Input, InputLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import React, { useEffect, useState } from "react";
import getAccessToken from "../utils/getAccessToken";

const baseEndpoint = "https://api.spotify.com";
const searchEndpoint = "/v1/search";

const radioButtonStyle = {
    color: 'white',
};

export default function SearchBar() {
  const [searchStr, setSearchStr] = useState("");
    const [token, setToken] = useState("");
    const [results, setResults] = useState([]);
    let test;

    const handleSearchChange = (event) => {
        event.preventDefault();
        setSearchStr(event.target.value);
    }

    useEffect(() => {
        const query = getAccessToken();
        query.then(response => {
            setToken(response);
        })
    }, [test]);

    const search = async (event) => {
        event.preventDefault();

        //define req headers
        const axiosConfig = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${token}`,
            },
            params: {
                q: searchStr,
                type: "track",
            }
        }

        //use axios to make reqest
        axios.get(`${baseEndpoint}${searchEndpoint}`, axiosConfig)
            .then(response => {
                setResults(response.data);
            })
            .catch((err) => ([{error: err}]));
    }
  
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