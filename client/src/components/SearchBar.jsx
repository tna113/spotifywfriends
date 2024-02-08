import { Container, FormControl, Input, InputLabel } from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import React, { useEffect, useState } from "react";
import getAccessToken from "../utils/getAccessToken";

const baseEndpoint = "https://api.spotify.com";
const searchEndpoint = "/v1/search";

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

    return (
        <Container>
            <form onSubmit={search}>
                <FormControl fullWidth>
                    <InputLabel>Search</InputLabel>
                    <Input placeholder="Search" defaultValue={searchStr} onChange={(event) => handleSearchChange(event)} />
                </FormControl>
            </form>
        </Container>
    )
}