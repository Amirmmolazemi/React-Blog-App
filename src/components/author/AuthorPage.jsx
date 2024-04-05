import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Container, Grid, Avatar, Typography } from "@mui/material";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <h4>loading ....</h4>;
  if (errors) return <h4>error ....</h4>;

  const { author } = data;
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={author.avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {author.field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(author.description.html),
            }}
          ></div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
