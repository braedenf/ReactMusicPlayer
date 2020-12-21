import React from 'react';
import Tweet from './Tweet';

const TweetList = ({name, tweets}) => {
    return(
        <div className="TweetList">
            <Tweet name={name} tweets={tweets}/>
        </div>   
    );
}

export default TweetList;