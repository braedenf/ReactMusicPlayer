import React from 'react';
import Tweet from './Tweet';

const TweetList = ({name, message}) => {
    return(
        <div className="TweetList">
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
        </div>   
    );
}

export default TweetList;