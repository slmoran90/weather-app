// const OPTIONS_FETCH = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "675d8fbba3msh0d36f9611af56fcp10cfc6jsn488015d06624",
//     "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
//   }
// }

export async function fetchData(query) {
  const { VITE_APP_KEY, VITE_BASE_URL } = import.meta.env

  const data = await fetch(
    `${VITE_BASE_URL}?key=${VITE_APP_KEY}&q=${query}&days=5&lang=es`
    // OPTIONS_FETCH
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
