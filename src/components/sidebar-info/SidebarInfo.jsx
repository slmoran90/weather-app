import SidebarHeader from './header/SidebarHeader'
import imgWeather from '../../assets/img/LightCloud.png'
import './sidebarInfo.scss'

const SidebarInfo = () => {
  return (
    <div className='main-container container'>
      <SidebarHeader/>
      <div className='main-container__body row'>
        <div className='col-sm-12'>
          <img src={imgWeather} alt='weather image' className='img-fluid' loading='lazy'/>
        </div>
        <div className='col-sm-12 temp-container'>
          <p className='temp'>
            15
            <span>°c</span>
          </p>
          <p className='condition'>shower</p>
          <p className='date'>
            <span>Hoy</span>
            <span>•</span>
            <span>Vier, 2 de Julio</span>
          </p>
          <p className='location'>
            <span className='material-icons'>location_on</span>
            Tucumán
          </p>
        </div>
      </div>
    </div>
  )
}

export default SidebarInfo