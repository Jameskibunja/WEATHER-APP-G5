import React from 'react';
import './Weather.css';

function Share({ activities }) {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(
    activities && activities.join('\n') 
  )}`;

  return (
    <div className='share-container'>
      <h2>Share</h2>
      <p>Share your selected activities with your friends:</p>
      <a href={shareUrl} target="_blank" rel="noopener noreferrer">Share on Facebook</a>
    </div>
  );
}

export default Share;
