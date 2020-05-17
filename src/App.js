import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core'

function App() {
  const [page, setPage] = useState("home")

  switch (page) {
    case "home":
      return home({ setPage })
    case "blog":
      return blog({ setPage })
  }
}

const home = ({ setPage }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tom Galligan</h1>
        <p>
          Hello! This will be my website/blog. Check back soon for updates.
        </p>
        <Button variant="contained" onClick={() => setPage("blog")}>Blog</Button>
      </header>
    </div>

  );
}

const blog = ({ setPage }) => {
  return (
    <div className="Blog">
      <header>
        <h1>This is going to be my blog.</h1>
      </header>
    </div>
  )
}
export default App;
