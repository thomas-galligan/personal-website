import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core'
import Blog from "./pages/Blog/Blog"
import About from "./pages/About/About"
import Header from './pages/components/header/header'
function App() {
  const [page, setPage] = useState("Home")
  const CurrentPage = pageMap[page]
  return (
    <div>
      <Header pageSetting={{ page, setPage }} />
      <CurrentPage pageSetting={{ page, setPage }} />
    </div>
  )
}


const Home = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tom Galligan</h1>
        <p>
          Hello! This will be my website/blog. Check back soon for updates.
        </p>
        <Button variant="contained" onClick={() => props.pageSetting.setPage("Blog")}>Blog</Button>
      </header>
    </div>

  );
}

const pageMap = {
  Home, Blog, About
}




export default App;
