import { Container, FormControl, Input, InputLabel } from "@mui/material";
import React from "react";

export default function SearchBar() {
    return (
        <Container>
            <FormControl fullWidth>
                <InputLabel>Search</InputLabel>
                <Input placeholder="Search" />
            </FormControl>
        </Container>
    )
}