import './header.scss'

const SidebarHeader = ({ setLocation }) => {
  const getLocation = () => {
    const { geolocation } = navigator

    if (geolocation) {
      geolocation.getCurrentPosition(geolocationPosition => {
        const { coords } = geolocationPosition
        return setLocation(coords)
      })
    }
  }

  return (
    <div className = 'sb-header-container'>
      <button className='btn rounded-pill bg-secondary'>
        Buscar lugares
      </button>
      <button className='btn btn-sm rounded-pill bg-secondary' onClick={() => getLocation()}>
        <span className="material-icons">my_location</span>
      </button>
    </div>
  )
}

export default SidebarHeader