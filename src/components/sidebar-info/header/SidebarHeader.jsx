import { useContext, useState } from 'react'
import { ForecastContext } from '../../../context/forecastContext'
import './header.scss'

const SidebarHeader = () => {
  const [inpValue, setInpValue] = useState()
  const { setLocation } = useContext(ForecastContext)

  const handleChange = e => {
    const { value } = e.target

    setInpValue({
      ...inpValue,
      value
    })
  }

  const handleSubmit = e => {
    const { target } = e

    e.preventDefault()

    try {
      setLocation(`${inpValue.value}`)
    } catch (error) {
      console.log(error)
    }

    target.reset()
    setInpValue(null)
  }

  const getLocation = () => {
    const { geolocation } = navigator

    if (geolocation) {
      geolocation.getCurrentPosition(geolocationPosition => {
        const { coords } = geolocationPosition
        return setLocation(`${coords.latitude},${coords.longitude}`)
      })
    }
  }

  return (
    <div className='row justify-content-between align-items-center p-3'>
      <div className="col-8 col-md-8">
        <form onSubmit={e => handleSubmit(e)}>
          <div className='input-group'>
            <input
              type="text"
              name="inpSearch"
              id="searchInput"
              className="form-control text-light bg-secondary border-0 border-end" placeholder='Buscar...'
              onChange={e => handleChange(e)}
            />
            <button className="input-group-text bg-secondary border">
              <span className="material-icons align-middle text-light">search</span>
            </button>
          </div>
        </form>
      </div>
      <div className="col-2 col-md-2">
        <button className='btn btn-sm rounded-pill bg-secondary' onClick={() => getLocation('btnLocation')}>
          <span className="material-icons align-middle text-light">my_location</span>
        </button>

      </div>
    </div>
  )
}

export default SidebarHeader