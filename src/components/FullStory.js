import React from 'react';
import './FullStory.css';

function FullStory({ article }) {
  console.log(article);
  return (
    <div className='fullStory'>
      <img
        className='fullStoryImage'
        src={article.urlToImage}
        alt='Story Media'
      />
      <h2 className='fullStoryTitle'>{article.title}</h2>
      <p className='fullStorySummary'>{article.description}</p>
      <div className='right'>
        <div>
          <p>Full article at: </p>
          <a
            className='fullStoryLink'
            href={article.url}
            target='_blank'
            rel='noreferrer'
          >
            {article.source.name}
          </a>
        </div>
        <div>
          <p>Share it:</p>
          <a
            class='twitter-share-button'
            href={`https://twitter.com/intent/tweet?text=${article.title}&url=${article.url}`}
            target='_blank'
            rel='noreferrer'
          >
            Tweet it
          </a>
        </div>
      </div>
    </div>
  );
}

export default FullStory;
