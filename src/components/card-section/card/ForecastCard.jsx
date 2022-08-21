import imgCard from '../../../assets/img/LightRain.png'
import './card.scss'

const ForecastCard = ({ card }) => {
  const { day, maxTemp, minTemp } = card

  return (
    <div className='card-container card' style={{ width: '120px', height: '180px' }}>
      <div className='card-body d-flex flex-column align-items-center justify-content-between'>
        <h5 className='title'>{day}</h5>
        <div className='img-container'>
          <img src={imgCard} alt='image temp' className='img-fluid' loading='lazy'/>
        </div>
        <div className="card-text w-100 justify-content-around temp-min-max">
          <p>{maxTemp}°C</p>
          <p>{minTemp}°C</p>
        </div>
      </div>
    </div>
  )
}

export default ForecastCard
