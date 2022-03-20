import React from 'react';
//Style
import "./Meme.scss";
//API data imgflip
import memesData from "../../config"; 

export default function Meme() {
  
  // const [memeImage, setMemeImage] = React.useState("");
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",  
    randomImage: "https://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage(){
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme(prevMeme => ({
      ...prevMeme, randomImage: memesArray[randomNumber].url
    }));
  }
 
  return (
    <main>
        <div className="form">
            <input 
                type="text" 
                className="form-input"
                placeholder="Top text"
            />
            <input 
                type="text" 
                className="form-input" 
                placeholder="Bottom text"
            />
            <button 
              className="form--button" 
              onClick={getMemeImage}
              >
                Get a meme image
              </button>
        </div>
        <img className="meme--image" src={meme.randomImage} alt="meme"/>
    </main>
  );
}
