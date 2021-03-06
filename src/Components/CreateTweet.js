import React, {useState} from 'react';

const CreateTweet = ({tweets, setTweets, textInput, setTextInput}) => {

//Functions
const userInputHandler = (e) => {
    setTextInput(e.target.value);
};

const submitTweetHandler = (e) => {
    e.preventDefault(); //Stop refreshing of page
    setTweets([...tweets, textInput]);
    setTextInput('');
};

    return(
        <form onSubmit={submitTweetHandler}>
            <textarea value={textInput} onChange={userInputHandler} cols="50" rows="5"></textarea>
            <button>Submit</button>
        </form>   
    );
}

export default CreateTweet;