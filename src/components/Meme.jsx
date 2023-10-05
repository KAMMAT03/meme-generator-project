import React from "react";
import memesData from "../memesData";

export default function Meme(){
    const [memeObj, setMemeObj] = React.useState({
        topText: 'text',
        bottomText: 'text bot',
        imgUrl: ''
    });

    const[allImages, setAllImages] = React.useState(memesData.data.memes);

    let getMemeImg = () => {
        const length = allImages.length;
        const randomNum = Math.floor(Math.random() * length);
        
        setMemeObj(prev => ({...prev, imgUrl: allImages[randomNum].url}));
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
                <img className="meme-img" src={memeObj.imgUrl} alt="" />
            </div>
        </div>
    )
}