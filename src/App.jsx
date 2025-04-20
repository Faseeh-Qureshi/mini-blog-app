import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";

function App() {
  return (
    <Router>
      <>
        <nav className="bg-gray-900 border-b border-gray-700 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-500">Mini Blog</h1>
            <div className="flex gap-6">
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Home
              </Link>
              <Link
                to="/add-post"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                Add Post
              </Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto mt-6">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Welcome to Mini Blog
          </h1>
          <p className="text-center text-gray-200 mb-6">
            A simple blog application built with React and Tailwind CSS.
          </p>
          <p className="text-center text-gray-100 mb-6">
            Explore the latest posts or create a new one!
          </p>
        </div>
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;
