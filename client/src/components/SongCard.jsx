import React from "react";
import { Container, Paper, Stack, Typography } from "@mui/material";

const songCardStyles = {
  height: '20em',
  width: '20em',
  padding: '1em'
}

export default function SongCard({title,artist}) {
  return (
    <Paper variant="elevation" elevation={4} sx={{...songCardStyles}}>
        <Container sx={{backgroundColor:'lightgreen', height: '60%'}}>
          pic
        </Container>

        <Stack direction="column" padding={1}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h5">{artist}</Typography>
        </Stack>
    </Paper>
  );
}
