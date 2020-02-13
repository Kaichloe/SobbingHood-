import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ()=> {

  return (
    <div>
      <header>
        <h1 className="splash-title">It's Time to Do Money</h1>
        <h2 className="splash-subtitle">Goblinhood, a pioneer of commission-free investing, gives you more ways to make your money work harder.</h2>
        <div><Link className="splash-signup" to="/signup">Sign Up!</Link></div>
  
      </header>
    </div>
  )
}

export default Splash;
