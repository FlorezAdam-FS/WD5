import React, { useState, useEffect } from 'react';
import './App.css';
import { BiSearch } from 'react-icons/bi';

function App() {
  const [articles, setArticles] = useState(null);
  const [searchValue, setSearchValue] = useState('elon');

  useEffect(() => {
    getData(searchValue);

    async function getData(search) {
      const response = await fetch(
        `https://free-news.p.rapidapi.com/v1/search?q=${search}&lang=en&page_size=10`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'free-news.p.rapidapi.com',
            'x-rapidapi-key':
              '99904098f4msh9256c1370a1059dp15ba00jsn7a23af031e17',
          },
        }
      );
      const data = await response.json();
      setArticles(data.articles);
      console.log(data.articles);
    }
  }, []);

  async function updateData(search) {
    const response = await fetch(
      `https://free-news.p.rapidapi.com/v1/search?q=${search}&lang=en&page_size=10`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'free-news.p.rapidapi.com',
          'x-rapidapi-key':
            '99904098f4msh9256c1370a1059dp15ba00jsn7a23af031e17',
        },
      }
    );
    const data = await response.json();
    setArticles(data.articles);
    console.log(data.articles);
  }

  function handleClick() {
    const search = document.querySelector('.search');
    console.log(search.value);
    updateData(search.value);
  }

  return (
    <div className='App'>
      <div className='searchBar'>
        <input
          type='text'
          value={searchValue}
          className='search'
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleClick}>
          <BiSearch />
        </button>
      </div>

      <main>
        {articles && (
          <div className='articles'>
            {articles.map((article, index) => (
              <article key={index}>
                <img src={article.media} alt='article' width={400} />
                <div className='text'>
                  <h3>{article.title}</h3>
                  <p className='summary'>{article.summary}</p>
                  <a
                    className='link'
                    href={article.link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Full Story
                  </a>
                </div>
              </article>
            ))}
            ;
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
