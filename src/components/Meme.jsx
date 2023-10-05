import React from "react";
import memesData from "../memesData";

export default function Meme(){
    const [imgUrl, setImgUrl] = React.useState();

    let getMemeImg = () => {
        const length = memesData.data.memes.length;
        const randomNum = Math.floor(Math.random() * length);
        
        setImgUrl(() => [memesData.data.memes[randomNum].url]);
    }

    return (
        <div className="meme">
            <div className="meme-inputs">
                <input className="meme-input" type="text" placeholder="Top text"/>
                <input className="meme-input" type="text" placeholder="Bottom text"/>
            </div>
            <button onClick={getMemeImg} className="meme-button">Get a new meme image 🖼</button>
            <img src={imgUrl} alt="" />
        </div>
    )
}