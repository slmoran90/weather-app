import SidebarInfo from './components/sidebar-info/SidebarInfo'
import CardSection from './components/card-section/CardSection'
import './App.scss'

const App = () => {
  return (
    <div className='app-container'>
      <SidebarInfo/>
      <CardSection/>
    </div>
  )
}

export default App
