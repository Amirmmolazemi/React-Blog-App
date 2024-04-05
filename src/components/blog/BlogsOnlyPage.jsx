import { Container, Grid } from "@mui/material";
import Blogs from "../blog/Blogs";

function BlogsOnlyPage() {
  return (
    <Container maxWidth="lg">
      <Grid container padding={3}>
        <Grid item xs={12}>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogsOnlyPage;
