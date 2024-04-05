import { Container, Grid, Typography } from "@mui/material";
import Authors from "./Authors";

function AuthorOnlyPage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={17}>
        <Grid item xs={12}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorOnlyPage;
