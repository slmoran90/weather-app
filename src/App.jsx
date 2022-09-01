import SidebarInfo from './components/sidebar-info/SidebarInfo'
import CardSection from './components/card-section/CardSection'
import ForecastProvider from './context/forecastContext'
import './App.scss'

const App = () => {
  return (
    <div className='app-container'>
      <ForecastProvider>
        <SidebarInfo/>
        <CardSection/>
      </ForecastProvider>
    </div>
  )
}

export default App
