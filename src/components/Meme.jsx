import React from "react";
import memesData from "../memesData";

export default function Meme(){
    const [imgUrl, setImgUrl] = React.useState('');

    let getMemeImg = () => {
        const length = memesData.data.memes.length;
        const randomNum = Math.floor(Math.random() * length);
        
        setImgUrl(() => [memesData.data.memes[randomNum].url]);
    }

    return (
        <div className="meme">
            <div className="form">
                <div className="form-inputs">
                    <input className="form-input" type="text" placeholder="Top text"/>
                    <input className="form-input" type="text" placeholder="Bottom text"/>
                </div>
                <button onClick={getMemeImg} className="form-button">Get a new meme image 🖼</button>
            </div>
            <div className="meme-container">
                <img className="meme-img" src={imgUrl} alt="" />
            </div>
        </div>
    )
}