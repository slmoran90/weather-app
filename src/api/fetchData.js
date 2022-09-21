const { VITE_APP_KEY, VITE_APP_HOST } = import.meta.env

const OPTIONS_FETCH = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${VITE_APP_KEY}`,
    "X-RapidAPI-Host": `${VITE_APP_HOST}`
  }
}

export async function fetchData(query) {
  const data = await fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&days=5&lang=es`,
    OPTIONS_FETCH
  )

  const res = await data.json()
  const { location, current, forecast } = res
  const { name, region, country, localtime } = location
  const { temp_c, is_day, condition, wind_kph, pressure_mb, humidity, vis_km } =
    current
  const { forecastday } = forecast

  return {
    name,
    region,
    country,
    localtime,
    temp_c,
    is_day,
    condition,
    wind_kph,
    pressure_mb,
    humidity,
    vis_km,
    forecastday
  }
}
