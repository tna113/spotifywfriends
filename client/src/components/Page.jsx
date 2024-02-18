import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

const pageStyles = {
  padding: "2em",
};
const subtitleStyles = {
  color: 'grey',
}

export default function Page({ children, title, subtitle, sx, direction, marginTop, icon }) {
  let marginTopValue;
  switch (marginTop) {
    case 'medium':
    marginTopValue = "4em";  
    break;
    case 'large':
      marginTopValue = "8em";
      break;
    default: 
      marginTopValue = "0";
      break;
  }

  return (
    <Container maxWidth="md" sx={{ ...pageStyles, ...sx, marginTop: marginTopValue }}>
      <Stack direction={direction} spacing={icon ? 2 : 4}>
        {title ? (
          <Box>
            <Typography variant="h3">
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body2" sx={{...subtitleStyles}}>{subtitle}</Typography>
            )}
          </Box>
        ): (
          <Typography variant="h3">
            {icon}
          </Typography>
        )}
        {children}
      </Stack>
    </Container>
  );
}