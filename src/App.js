import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Blog from "./pages/Blog/Blog";
import Job from "./pages/Job/Job";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/job" element={<Job/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
