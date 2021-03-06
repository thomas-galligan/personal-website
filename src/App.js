import React, { useState } from 'react';
import './App.css';
import Blog from "./pages/Blog/Blog"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import Header from './pages/components/header/header'
import Footer from "./pages/components/Footer/Footer"
function App() {
  const [page, setPage] = useState("Home")
  const CurrentPage = pageMap[page]
  return (
    <div>
      <Header pageSetting={{ page, setPage }} />
      <CurrentPage pageSetting={{ page, setPage }} />
      <Footer />
    </div>
  )
}

const pageMap = {
  Home, Blog, About
}




export default App;
