// import imgCard from '../../../assets/img/LightRain.png'
import { getDate } from '../../../helper/getDate'
import './card.scss'

const ForecastCard = ({ forecastData, localtime }) => {
  const { day, date } = forecastData
  const { maxtemp_c, mintemp_c, condition } = day

  const d = getDate(date)
  const dateNow = getDate(localtime)

  const getWeek = () => d.day === dateNow.day ? 'Hoy' : d.day === (dateNow.day + 1) ? 'Mañana' : `${d.week}, ${d.day} de ${d.month}`

  const week = getWeek()

  return (
    <div className='card-container card' style={{ width: '120px', height: '180px' }}>
      <div className='card-body d-flex flex-column align-items-center justify-content-between'>
        <h5 className='title'>{week}</h5>
        <div className='img-container'>
          <img src={condition?.icon} alt='image temp' className='img-fluid' loading='lazy'/>
        </div>
        <div className="card-text w-100 d-flex justify-content-around temp-min-max">
          <p>{mintemp_c}°C</p>
          <p>{maxtemp_c}°C</p>
        </div>
      </div>
    </div>
  )
}

export default ForecastCard
