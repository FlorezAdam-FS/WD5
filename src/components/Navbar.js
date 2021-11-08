import { BiSearch } from 'react-icons/bi';
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ cb, path }) {
  const [searchValue, setSearchValue] = useState('');

  async function updateData(search) {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=85062f74bccf4b33872bf17c11caaae6
      `
    );
    const data = await response.json();
    console.log(data);

    cb(data.articles);
  }

  function handleClick(e) {
    e.preventDefault();
    const search = document.querySelector('.search');
    updateData(search.value);
  }

  return (
    <div className='navBar'>
      <a href='/'>
        <h1 className='techNewsie'>TechNewsie</h1>
      </a>
      <Link className='storiesLink' to='/'>
        Stories
      </Link>
      <form>
        <input
          type='text'
          value={searchValue}
          className='search'
          placeholder='search'
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleClick}>
          <BiSearch />
        </button>
      </form>
    </div>
  );
}

export default Navbar;
