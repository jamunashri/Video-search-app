import "./styles.css";
import { SearchBox, Container } from "./AppLayout";
import { useEffect, useState } from "react";
import { videos } from "./video";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [searchArray, setSearchArray] = useState([]);
  console.log(searchArray, "searchText");
  useEffect(() => {
    let resultantData = videos.find((el) => el.title === searchText);
    setSearchArray(resultantData);
  }, [searchText]);
  return (
    <div className="App">
      <h1>U-Tube</h1>
      <SearchBox
        searchText={searchText}
        eventHandler={(e) => setSearchText(e.target.value)}
      />
      <Container resultanData={searchArray} />
    </div>
  );
}
