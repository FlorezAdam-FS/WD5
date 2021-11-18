import React from 'react';
import './FullStory.css';

function FullStory({ article }) {
  console.log(article);
  return (
    <div className='fullStory'>
      <img className='fullStoryImage' src={article.media} alt='Story Media' />
      <h2 className='fullStoryTitle'>{article.title}</h2>
      <p className='fullStorySummary'>{article.summary}</p>
      <div className='right'>
        <div>
          <p>Full article at: </p>
          <a
            className='fullStoryLink'
            href={article.link}
            target='_blank'
            rel='noreferrer'
          >
            {article.clean_url}
          </a>
        </div>
        <div>
          <p>Share it:</p>
          <a
            className='twitter-share-button'
            href={`https://twitter.com/intent/tweet?text=${
              article.title
            }&hashtags=${article.topic}&url=${
              article.link
            }&via=${article.twitter_account.replace('@', '')}`}
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
