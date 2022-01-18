import React from 'react';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-light bg-dark">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active link-light " href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-light" href="/div1">Div1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-light" href="/div2">Div2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-light" href="/div3">Div3</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
