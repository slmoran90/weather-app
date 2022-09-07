import { useContext } from 'react'
import { ForecastContext } from '../../context/forecastContext'
import SidebarHeader from './header/SidebarHeader'
import { getDate } from '../../helper/getDate'
import './sidebarInfo.scss'

const SidebarInfo = () => {
  const { forecast, loading } = useContext(ForecastContext)
  const { name, temp_c, condition, localtime, region } = forecast

  const date = getDate(localtime)
  const { week, day, month } = date

  const load =
  <div className="d-flex justify-content-center mt-5">
    <div className="lds-ellipsis">
      <div/>
      <div/>
      <div/>
    </div>
  </div>

  return (
    <div className='main-container col-12 col-md-4 w-md-100'>
      <SidebarHeader/>
      {
        loading
          ? load
          : <div className='main-container__body row position-relative'>
        <div className='col-sm-12'>
          <img src={condition?.icon} alt='weather image' className='mt-3 img-fluid' loading='lazy'/>
        </div>
        <div className='col-sm-12 temp-container'>
          <p className='temp'>
            {temp_c}
            <span>°c</span>
          </p>
          <p className='condition'>{condition?.text}</p>
          <p className='date'>
            <span>Hoy</span>
            <span>•</span>
            <span>{week}, {day} de {month}</span>
          </p>
          <p className='location'>
            <span className='material-icons'>location_on</span>
            {name} - {region}
          </p>
        </div>
          <div className="main-background"/>
            </div>
      }
    </div>
  )
}

export default SidebarInfo