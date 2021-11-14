import { BiSearch } from 'react-icons/bi';
import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ cb }) {
  const [searchValue, setSearchValue] = useState('');

  async function updateData(search) {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=85062f74bccf4b33872bf17c11caaae6
      `
    );
    const data = await response.json();

    cb(data.articles);
  }

  function handleClick(e) {
    e.preventDefault();
    const search = document.querySelector('.search');
    updateData(search.value);
  }

  let location = useLocation();

  return (
    <div className='navBar'>
      <Link to='/'>
        <h1 className='techNewsie'>TechNewsie</h1>
      </Link>
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
      <style jsx='true'>{`
        form {
          transform: ${location.pathname === '/fullstory'
            ? 'translateX(1000%)'
            : 'translateX(0)'};
          opacity: ${location.pathname === '/fullstory' ? '0' : '1'};
          transition: all 300ms ease-out;
        }
        .storiesLink {
          transform: ${location.pathname === '/fullstory'
            ? 'translateX(382px)'
            : 'translateX(0)'};
          transition: 300ms ease-out;
        }
        @media (max-width: 800px) {
          form {
            transform: ${location.pathname === '/fullstory'
              ? 'translateX(200%)'
              : 'translateX(0)'};
            opacity: ${location.pathname === '/fullstory' ? '0' : '1'};
            transition: all 300ms ease-out;
          }
          .storiesLink {
            transform: ${location.pathname === '/fullstory'
              ? 'translateX(0)'
              : 'translateX(0)'};
            transition: all 300ms ease-out;
          }
          .navBar {
            padding-bottom: ${location.pathname === '/fullstory'
              ? '0'
              : '1rem'};
            transition: all 300ms ease-in-out;
          }
        }
      `}</style>
    </div>
  );
}

export default Navbar;
