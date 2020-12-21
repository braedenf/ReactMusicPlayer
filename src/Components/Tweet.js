import React from 'react';

const Tweet = ({name, message, tweets}) => {
    return(
        <div className="Tweet">
            <h2>{name}</h2>
            <h3>{tweets}</h3>
            <button>Delete</button>
            <button>Like</button>
        </div>   
    );
}

export default Tweet;