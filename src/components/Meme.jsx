import React from "react";

export default function Meme(){
    return (
        <div className="meme">
            <div className="meme-inputs">
                <input className="meme-input" type="text" placeholder="Top text"/>
                <input className="meme-input" type="text" placeholder="Bottom text"/>
            </div>
            <button className="meme-button">Get a new meme image</button>
        </div>
    )
}