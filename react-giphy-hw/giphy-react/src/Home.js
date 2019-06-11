import React from "react";
import SearchContainer from "./components/SearchContainer";
import Results from "./components/Results";

const Home = () => {
  const [searchResults, setSearchResults] = React.useState([])

  return (
    <div className="Home">
      <h1>Hello world</h1>
      <SearchContainer setSearchResults={setSearchResults}/>
      <Results searchResults={searchResults} />
    </div>
  );
}
export default Home