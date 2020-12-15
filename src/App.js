import React, {useState} from "react";

//Import Components
import CreateTweet from './Components/CreateTweet'
import TweetList from "./Components/TweetList";

function App() {

  //State
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  const [name, setName] = useState("Braeden");
  const message = "This is a message";

  return (
    <div>
        <CreateTweet
          textInput={textInput}
          setTextInput={setTextInput}
          tweets={tweets}
          setTweets={setTweets}
        />
        <TweetList name={name} tweets={tweets}/>
    </div>
  );
}

export default App;
