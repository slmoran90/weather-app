import SidebarInfo from './components/sidebar-info/SidebarInfo'
import CardSection from './components/card-section/CardSection'
import ForecastProvider from './context/forecastContext'
import './App.scss'

const App = () => {
  return (
    <div className='row w-100 gx-0 min-vh-100'>
      <ForecastProvider>
        <SidebarInfo/>
        <CardSection/>
      </ForecastProvider>
    </div>
  )
}

export default App
