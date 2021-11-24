import React, { useState } from "react";
import "./styles.css";

//Emoji Database!
var emojiDictionary = {
  "😊": "smiling",
  "🙄": "disbelief",
  "😞": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😡": "angry",
  "😭": "crying",
  "🥶": "cold",
  "😂": "Laughing",
  "😈": "Devil"
};

var knownEmoji = Object.keys(emojiDictionary);

export default function App() {
  var [emojiMeaning, setEmojiMeaning] = useState("Translation will come here!");

  function emojiInputHandler(event) {
    var emoji = event.target.value;

    if (emoji in emojiDictionary) {
      setEmojiMeaning(emojiDictionary[emoji]);
    } else {
      setEmojiMeaning("We don't have this emoji in our database!");
    }
  }

  function emojiClickHandler(emoji) {
    setEmojiMeaning(emojiDictionary[emoji]);
  }

  return (
    // It's our view which the user see
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        className="input_box"
        placeholder="Put your Emoji Here..."
        onChange={emojiInputHandler}
      ></input>
      <h2> {emojiMeaning} </h2>

      <h2> Emoji's We Know</h2>
      {knownEmoji.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "1rem 0.5rem",
              cursor: "pointer"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/**
 * VISER - View -> Interact -> State In Event Handler -> Render
 */
