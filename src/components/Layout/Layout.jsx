import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
