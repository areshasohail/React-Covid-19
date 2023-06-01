const CountrySelector = ({country,setCountry}) => {
    const getValue = (e)=>{
      country = e.target.value
      setCountry(country)
    }
    return (
      <div>
          <select onChange={getValue} className='selectorOptions'>
              <option value={'CA'}>Canada</option>
              <option value={'PK'}>Pakistan</option>
              <option value={'CN'}>China</option>
              <option value={'FR'}>France</option>
              <option value={'AR'}>Africa</option>
              <option value={'EG'}>England</option>
              <option value={'AR'}>America</option>
              <option value={'KR'}>karachi</option>
              <option value={'JP'}>Japan</option>
              <option value={'IL'}>Italy</option>
              <option value={'ID'}>India</option>
              <option value={'TR'}>Turkey</option>
              <option value={'BL'}>Bangladesh</option>
          </select>
      </div>
    )
  }
  
  export default CountrySelector