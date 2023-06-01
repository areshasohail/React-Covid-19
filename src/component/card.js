import CountUp from 'react-countup'
import Graph from './graph'
export default function Cards({data}) {
let date = new Date().toLocaleDateString()
  return (
    
    <>

    <div>

    <div className="container-cards">
      <div className="parent-infected layout">
        <div><h3 className='cards-dates'>Infected</h3></div>
        <div><h2>
            <CountUp end={data.stats.totalConfirmedCases} duration={0.5} separator=',' /></h2></div>
        <div><h5 className='cards-dates'>{date}</h5></div>
        <div><p className='text-p'>ACTIVE CASES</p></div>
      </div>
      <div className="recovered-infected layout">
        <div><h3 className='cards-dates'>Recovered</h3></div>
        <div><h2><CountUp end={data.stats.totalRecoveredCases} duration={0.5} separator=',' /></h2></div>
        <div><h5 className='cards-dates'>{date}</h5></div>
        <div><p  className='text-p'>RECOVERED CASES</p></div>
      </div>
      <div className="deaths-infected layout">
        <div><h3 className='cards-dates'>Deaths</h3></div>
        <div><h2><CountUp end={data.stats.totalDeaths} duration={0.5} separator=',' /></h2></div>
        <div><h5 className='cards-dates'>{date}</h5></div>
        <div><p className='text-p'>DEATHS CASES</p></div>
      </div>
    </div>
    <Graph infected = {data.stats.totalConfirmedCases} recovered = {data.stats.totalRecoveredCases} deaths = {data.stats.totalDeaths} />

    </div>
   
        </>

  )
}