import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage.jsx";
import Layout from "./components/Layout/Layout.jsx";
import BlogPage from "./components/blog/BlogPage.jsx";
import AuthorPage from "./components/author/AuthorPage.jsx";
import BlogsOnlyPage from "./components/blog/BlogsOnlyPage.jsx";
import AuthorOnlyPage from "./components/author/AuthorOnlyPage.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authors" element={<AuthorOnlyPage />} />
        <Route path="/blogs" element={<BlogsOnlyPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
