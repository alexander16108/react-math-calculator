import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
      activeClasses: 'homePage',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
      activeClasses: 'calcPage',
    },
    {
      id: 2,
      path: '/quotes',
      text: 'Quotes',
      activeClasses: 'quotePage',
    },
  ];

  return (
    <div className="nav">
      <nav
        className="navBar"
        style={{
          display: 'flex',
          padding: '10px',
          justifyContent: 'space-between',
        }}
      >
        <h1 className="title">
          Math Magicians
        </h1>
        <ul className="otherPages">
          {links.map((link) => (
            <li className={link.activeClasses} key={link.id}>
              <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <footer
        className="footer"
        style={{
          position: 'fixed',
          top: '100%',
          left: '0%',
          bottom: '100%',
          padding: '30px',
          backgroundColor: 'grey',
        }}
      >
        <p
          style={{
            textAlign: 'center',
            fontSize: '20px',
          }}
        >
          Created by Alexander Mayowa
        </p>
      </footer>
    </div>
  );
};

export default Header;
