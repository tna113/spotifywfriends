import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

const pageStyles = {
  padding: "2em",
};

export default function Page({ children, title, sx, direction }) {
  return (
    <Container maxWidth="md" sx={{ ...pageStyles, ...sx }}>
      <Stack direction={direction} spacing={4}>
        {title && (
          <Box>
            <Typography variant="h3" gutterBottom>
              {title}
            </Typography>
          </Box>
        )}
        {children}
      </Stack>
    </Container>
  );
}