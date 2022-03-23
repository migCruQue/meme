import React from 'react';
//Style
import "./Meme.scss";


export default function Meme() {
  
  // const [memeImage, setMemeImage] = React.useState("");
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",  
    randomImage: "https://i.imgflip.com/1bij.jpg"
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes));
  },[]);

  function getMemeImage(){
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    setMeme(prevMeme => ({
      ...prevMeme, randomImage: allMemes[randomNumber].url
    }));
  }

  function handleChange(event){
    const {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme, 
      [name]: value
    }))
  }
 
  return (
    <main>
        <div className="form">
            <input 
                type="text" 
                className="form-input"
                placeholder="Top text"
                name="topText"
                onChange={handleChange}
                value={meme.topText}
            />
            <input 
                type="text" 
                className="form-input" 
                placeholder="Bottom text"
                name="bottomText"
                onChange={handleChange}
                value={meme.bottomText}
            />
            <button 
              className="form--button" 
              onClick={getMemeImage}
              >
                Get a meme image
              </button>
        </div>
        <div className="meme">
          <img className="meme--image" src={meme.randomImage} alt="meme"/>
          <h2 className="meme--text-top">{meme.topText}</h2>
          <h2 className="meme--text-bottom">{meme.bottomText}</h2>
        </div>
        
    </main>
  );
}
