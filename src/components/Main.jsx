
import {useState} from "react";// {} to destructure the use state

export default function Main() {


const [meme,setMem ] = useState({
    imgUrl:"https://i.imgflip.com/dcc0n.jpg",
    topMeme:"One does not simply",
    bottomMeme:"Walk into Mordor"
})

  return (
    <main>
      <div>
        <label>
          Top Text
          <input
            type="text"
            placeholder="One Does noot simply"
            name="topText"
          />
        </label>
        <label>
          Bottom Text
          <input type="text" placeholder="Walk into Mordor" name="BottomText" />
        </label>

        <button>Get New Image</button>
      </div>

      <div className="meme">
    <img 
    src="https://i.imgflip.com/dcc0n.jpg" alt="" />
     <span className="top"> One does not simply</span>
          <span className="bottom"> Walk into Mordor</span>
     </div>
    </main>
  );
}
