import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

const pageStyles = {
  padding: "2em",
};
const subtitleStyles = {
  color: 'grey',
}

export default function Page({ children, title, subtitle, sx, direction }) {
  return (
    <Container maxWidth="md" sx={{ ...pageStyles, ...sx }}>
      <Stack direction={direction} spacing={4}>
        {title && (
          <Box>
            <Typography variant="h3">
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body2" sx={{...subtitleStyles}}>{subtitle}</Typography>
            )}
          </Box>
        )}
        {children}
      </Stack>
    </Container>
  );
}