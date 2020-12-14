import React from "react";

//Import Components
import CreateTweet from './Components/CreateTweet'
import TweetList from "./Components/TweetList";

const name = "Username";
const message = "This is the standard message.";

function App() {

  return (
    <div>
        <h1>Hello React</h1>
        <CreateTweet />
        <TweetList name={name} message={message}/>
    </div>
  );
}

export default App;
