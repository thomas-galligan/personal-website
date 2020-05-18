import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core'
import Blog from "./pages/Blog/Blog"
import Header from './pages/components/header/header'
function App() {
  const [page, setPage] = useState("home")

  switch (page) {
    case "Home":
      return <Home pageSetting={{ page, setPage }} />
    case "Blog":
      return <Blog pageSetting={{ page, setPage }} />
    default:
      return <Home pageSetting={{ page, setPage }} />
  }
}

const Home = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <Header props={props}></Header>
        <h1>Tom Galligan</h1>
        <p>
          Hello! This will be my website/blog. Check back soon for updates.
        </p>
        <Button variant="contained" onClick={() => props.pageSetting.setPage("Blog")}>Blog</Button>
      </header>
    </div>

  );
}


export default App;
