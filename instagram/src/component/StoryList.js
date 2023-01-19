import React from 'react';
import StoryListItem from './StoryListItem';
import "../css/StoryList.scss";

const StoryList = ({contents}) => {

    return (
        <div className='storylist'>
            {contents.map(content => (
                <StoryListItem content={content} key={content.id}/>
            ))}
        </div>
    );
};

export default StoryList;