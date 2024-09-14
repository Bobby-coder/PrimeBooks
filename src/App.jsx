import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";
import BrowseBooksPage from "./pages/BrowseBooksPage";
import AddBookPage from "./pages/AddBookPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/books/:category" element={<BrowseBooksPage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/:bookId" element={<BookDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
