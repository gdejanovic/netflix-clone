import "./App.css";
import React from "react";
import Row from "./Row";
import requests from "./request";
function App() {
  return (
    <div className="App">
      <h1>Netflix clone</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
