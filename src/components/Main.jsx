import { useState, useEffect } from "react"; // {} to destructure the use state

export default function Main() {
  const [meme, setMem] = useState({
    // state is an object
    imgUrl: "https://i.imgflip.com/dcc0n.jpg",
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  });

  const [allmeme,setAllMemes] =useState([])
  useEffect(function () {
    console.log("effect Ran");
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      })
      .catch((err) => console.error("Error fetching memes:", err));
  }, []);

  function GetRandomImage(){
    //get a random number from 0 to array.length
    const randomNumber = Math.floor(Math.random() * allmeme.length)
    //get random number to get random meme
    const newMemeUrl = allmeme[randomNumber].url
    setMem(prevMeme => ({
  ...prevMeme,
  imgUrl: newMemeUrl
}));

  }

  function handleChange(event) {
    //event listner that reflect the respective pieces of state depending on the name of the input fields
    const { value, name } = event.currentTarget;
    setMem((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  
//11h 15min 40s

  return (
    <main>
      <div>
        <label>
          Top Text
          <input
            type="text"
            placeholder="One Does noot simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText} //inputbox reflect the currect value of state
          />
        </label>
        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText} //inputbox reflect the currect value of state
          />
        </label>

        <button on onClick={GetRandomImage}>Get a New Meme Image</button>
      </div>

      <div className="meme">
        <img src={meme.imgUrl} alt="" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
