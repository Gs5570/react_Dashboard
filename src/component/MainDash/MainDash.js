import React from 'react';
import Cards from '../Cards/Cards';
import './MainDash.css';
import Table from '../Table/Table';


const MainDash = () => {
  return (
    <div className='mainDash'>
        <h1>Dashboard</h1>
        <Cards />
        <Table />
        {/* <h1>Web Site visitors</h1> */}

        {/* <h1>Average Rating</h1>
        <h1>Sentiment analysis</h1> */}
    </div>
  )
}

export default MainDash