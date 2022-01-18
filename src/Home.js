import './Home.css';
import React from 'react';
import Navbar from "./Navbar";

function Home() {
    return (
     <>
     <Navbar/>
     <div className='row '>
       <p className='home col-sm-4'>
         Hey Welcome to contest Lister
         Click on The different Link in the Nav Bar to List all Finished 
         Contest of different Divisions on Codeforces
         Happy Coding !!. 
       </p>
     </div>
     </>
    );
  }
  
  export default Home;
  