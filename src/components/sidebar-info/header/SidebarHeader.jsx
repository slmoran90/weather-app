import './header.scss'

const SidebarHeader = () => {
  return (
    <div className = 'sb-header-container'>
      <button className='btn rounded-pill bg-secondary'>
        Buscar lugares
      </button>
      <button className='btn btn-sm rounded-pill bg-secondary'>
        <span className="material-icons">my_location</span>
      </button>
    </div>
  )
}

export default SidebarHeader