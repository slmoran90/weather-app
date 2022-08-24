const OPTIONS_FETCH = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "675d8fbba3msh0d36f9611af56fcp10cfc6jsn488015d06624",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
  }
}

export async function fetchData(query) {
  const data = await fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&lang=es`,
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