import { Container, FormControl, Input, InputLabel } from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import React, { useState } from "react";

const baseEndpoint = "https://api.spotify.com";
const searchEndpoint = "/v1/search";

//https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track

//https://developer.spotify.com/documentation/web-api/tutorials/getting-started

//https://developer.spotify.com/documentation/web-api/concepts/api-calls

//https://developer.spotify.com/documentation/web-api/reference/search

export default function SearchBar() {
    const [searchStr, setSearchStr] = useState("");
    const handleSearchChange = (event) => {
        event.preventDefault();
        console.log(`seachStr: ${event.target.value}`);
        setSearchStr(event.target.value);
    }

    const searchArtist = async (event) => {
        event.preventDefault();

        //get access token
        const accessToken = "";

        //define req headers
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            }
        }

        //define PATH parameters
        const params = {
            q: searchStr,
            type: "track",
        }

        //use axios to make reqest
        axios.get(`${baseEndpoint}${searchEndpoint}`, {})
            .then(response => {
                
            })
            .catch((err) => ([{error: err}]));
    }

    return (
        <Container>
            <FormControl fullWidth>
                <InputLabel>Search</InputLabel>
                <Input placeholder="Search" defaultValue={searchStr} onChange={(event) => handleSearchChange(event)} />
            </FormControl>
        </Container>
    )
}