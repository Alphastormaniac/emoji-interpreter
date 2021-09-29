import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🫐": "Blueberries",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato",
  "🫒": "Olive"
};

const emojis = Object.keys(emojiDictionary); // returns an array of all the keys of the object

export default function App() {
  const [emoji, setEmoji] = useState("");

  const [meaning, setMeaning] = useState("translation will show here....");

  function emojiEventHandler(e) {
    const userInput = e.target.value;

    setEmoji(userInput);

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Inside outt</h1>
      <input
        value={emoji}
        placeholder="type in fruit emojis"
        onChange={emojiEventHandler}
      ></input>
      <h2>{emoji}</h2>
      <h3>{meaning}</h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
