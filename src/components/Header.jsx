import trollFace from "../assets/TrollFace.png"; // if importing from src/components/


export default function Header(){
    return(
        <header className="header">
            <img className="nav-logo" src={trollFace} />
            <h1 className="header-text">Meme Generator</h1>
        </header>
    )
}