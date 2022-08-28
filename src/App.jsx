import { useEffect, useState } from 'react'
import SidebarInfo from './components/sidebar-info/SidebarInfo'
import CardSection from './components/card-section/CardSection'
import { fetchData } from './api/fetchData'
import './App.scss'

const App = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState()

  const query = location ? `${location.latitude}, ${location.longitude}` : 'argentina'

  const fetch = async () => {
    const res = await fetchData(query)
    setData(res)
  }

  useEffect(() => {
    fetch()
  }, [location])

  return (
    <div className='app-container'>
      <SidebarInfo data={data} setData={setData} setLocation={setLocation}/>
      <CardSection data={data}/>
    </div>
  )
}

export default App
