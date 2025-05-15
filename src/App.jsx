import { useState ,useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [meme, setmeme] = useState({});
  console.log("rendered");

 useEffect(
    function () {
      console.log("effect Ran");
        fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setmeme(data);
      })
      .catch((err) => console.error("Error fetching memes:", err));
  }, []);
    
  

  return (
    <>
      <Header />
      <Main />

       {/* <div>
      <h1>Meme Generator</h1>
      {meme ? (
        <pre>{JSON.stringify(meme, null, 2)}</pre>
      ) : (
        <p>Loading memes...</p>
      )}
    </div> */}

    </>
  );
}
