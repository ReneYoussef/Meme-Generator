import { useState } from "react"; // {} to destructure the use state

export default function Main() {
  const [meme, setMem] = useState({
    // state is an object
    imgUrl: "https://i.imgflip.com/dcc0n.jpg",
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  });

  function handleChange(event) {
    //event listner
    const { value ,name } = event.currentTarget;
    setMem((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

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

        <button>Get a New Meme Image</button>
      </div>

      <div className="meme">
        <img src={meme.imgUrl} alt="" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
