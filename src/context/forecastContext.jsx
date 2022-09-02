import { createContext, useState, useEffect } from "react"
import { fetchData } from '../api/fetchData'

export const ForecastContext = createContext()

const ForecastProvider = ({ children }) => {
  const [forecast, setForecast] = useState({})
  const [location, setLocation] = useState('argentina')

  const getdata = async () => {
    try {
      const data = await fetchData(location)
      return setForecast(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getdata()
  }, [location])

  return (
    <ForecastContext.Provider value={{ forecast, setForecast, location, setLocation }}>
      { children }
    </ForecastContext.Provider>
  )
}

export default ForecastProvider