import React from 'react';

const TopicCover = ({src, label}) => {
    return (
        <div className="cover-container">
            <img src={src} className="cover-img" alt={src}/>
            <div className={`cover-label`}><span className={`${label}`}>{label}</span></div>
        </div>
    );
}

export default TopicCover;
