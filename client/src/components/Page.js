import { Box, Container, Stack, Typography } from "@mui/material";

const pageStyles = {
  paddingTop: "2em",
};

export default function Page({ children, title, sx }) {
  return (
    <Container maxWidth="md" sx={{ ...pageStyles, ...sx }}>
      <Stack direction="column">
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
