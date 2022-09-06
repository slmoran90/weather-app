import { createContext, useState, useEffect } from "react"
import { fetchData } from '../api/fetchData'

export const ForecastContext = createContext()

const ForecastProvider = ({ children }) => {
  const [forecast, setForecast] = useState({})
  const [location, setLocation] = useState('argentina')
  const [loading, setLoading] = useState(false)

  const getdata = async () => {
    try {
      setLoading(true)
      const data = await fetchData(location)
      setLoading(false)
      return setForecast(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getdata()
  }, [location])

  return (
    <ForecastContext.Provider value={{ forecast, setForecast, location, setLocation, loading }}>
      { children }
    </ForecastContext.Provider>
  )
}

export default ForecastProvider