import React from 'react';
import './Stories.css';
import { Link } from 'react-router-dom';

function Stories({ setArticle, searchedArticles }) {
  console.log(searchedArticles);
  if (searchedArticles.length < 1) {
    return (
      <div className='stories'>
        <div className='centeredText'>
          <div className='centeredImg'></div>
          <h4>
            Type something in the search bar <br /> that you want to look up in
            the news!
          </h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className='stories'>
        {searchedArticles && (
          <div className='articles'>
            {searchedArticles.map((article, index) => (
              <Link
                key={index}
                className='link'
                to='/fullstory'
                onClick={(e) => {
                  setArticle(article);
                }}
              >
                <article>
                  <img src={article.urlToImage} alt='article' width={400} />
                  <div className='text'>
                    <span>
                      {'published on: ' +
                        article.publishedAt.split('T').slice(0, 1)}
                    </span>
                    <h3>{article.title}</h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Stories;
