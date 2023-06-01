import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './component/card';
import Header from './component/header';
import Countries from './component/countries';
  
function App() {
  let [dailyData, setDailyData] = useState({stats:{history:[],totalDeaths:0,totalRecoveredCases:0,totalConfirmedCases:0}});
  let [country,setCountry] =useState('CA')

  const data = {
    method: 'GET',
    url: 'https://coronavirus-smartable.p.rapidapi.com/stats/v1/'+country+'/',
    headers: {
      'X-RapidAPI-Key': 'ad87983462msh4cc65d187bc2ca8p13b60djsn85795046d57d',
      'X-RapidAPI-Host': 'coronavirus-smartable.p.rapidapi.com'
    }
  }
  useEffect(()=>{ 
    axios.request(data).then(function (response) {
      dailyData = response.data
      setDailyData(dailyData)
      console.log(dailyData)
    }).catch(function (error) {
      console.error(error);
     });
    },[country])
  return(
    <div   className='some'>
      <Header/>
    <Countries setCountry={setCountry} country = {country} />
      <Card data={dailyData} />
    
    </div>
  );
}

export default App;
