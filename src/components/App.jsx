import React from "react";
import EmojiDic from "./emojiDic";
import emojipedia from "../emojipedia"

function App() {
  const styles={
    borderRadius:"20px",
  }
  return (
    <div>
      <h1>
        <span style={styles}>emojipedia</span>
      </h1>
      <dl className="dictionary">
     {emojipedia.map(
      emoji =>{
        return(
       <EmojiDic 
       key={emoji.id}
       emoji={emoji.emoji}
       name={emoji.name}
       meaning={emoji.meaning}
       />
        )
      }
     )}
     </dl>
      
    </div>
  );
}

export default App;
