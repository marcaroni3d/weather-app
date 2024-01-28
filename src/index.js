async function fetchWeatherData (location) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=dbf592303e174c8d8d620709242601&q=${location}`, { mode: 'cors' })
  const weatherData = await response.json()

  console.log(weatherData)
}

fetchWeatherData('cincinnati')
