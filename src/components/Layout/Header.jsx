import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

function Header() {
  return (
    <header>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
              وبلاگ وبیار
            </Typography>
            <BookIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
