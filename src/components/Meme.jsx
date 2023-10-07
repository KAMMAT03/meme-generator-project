import React from "react";
import memesData from "../memesData";

export default function Meme(){
    const [memeObj, setMemeObj] = React.useState({
        topText: '',
        bottomText: '',
        imgUrl: ''
    });

    let handleChange = event => {
        const {name, value} = event.target;

        setMemeObj(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

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
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Top text"
                        onChange={handleChange}
                        value={memeObj.topText}
                        name="topText"
                    />
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Bottom text"
                        onChange={handleChange}
                        value={memeObj.bottomText}
                        name="bottomText"
                    />
                </div>
                <button onClick={getMemeImg} className="form-button">Get a new meme image 🖼</button>
            </div>
            <div className="meme-container">
                <img className="meme-img" src={memeObj.imgUrl} alt="" />
                <h2 className="meme-toptext">{memeObj.topText}</h2>
                <h2 className="meme-bottomtext">{memeObj.bottomText}</h2>
            </div>
        </div>
    )
}