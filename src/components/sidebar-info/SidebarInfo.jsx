import SidebarHeader from './header/SidebarHeader'
import imgWeather from '../../assets/img/LightCloud.png'
import './sidebarInfo.scss'
import dayjs from 'dayjs'

const SidebarInfo = ({ data, setData, setLocation }) => {
  const { name, temp_c, condition, localtime, region } = data

  const getDate = date => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const week = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']

    const localdate = date?.slice(0, 10)
    const d = dayjs(localdate)

    return `${week[d.$W]}, ${d.$D} de ${months[d.$M]}`
  }

  const date = getDate(localtime)

  return (
    <div className='main-container container'>
      <SidebarHeader setLocation={setLocation}/>
      <div className='main-container__body row'>
        <div className='col-sm-12'>
          <img src={imgWeather} alt='weather image' className='img-fluid' loading='lazy'/>
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
            <span>{date}</span>
          </p>
          <p className='location'>
            <span className='material-icons'>location_on</span>
            {name} - {region}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SidebarInfo