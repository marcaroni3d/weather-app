const api = (() => {
    const API_KEY = 'dbf592303e174c8d8d620709242601'

    async function processData(data) {
        const { weatherData, units } = data

        const processedData = {
            units,
            location: {
                city: weatherData.location.name,
                country: weatherData.location.country
            },
            current: {
                date: new Date().toLocaleDateString([], {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                }),
                description: weatherData.current.condition.text,
                weatherIcon: weatherData.current.condition.icon,
                temp: '',
                tempC: Math.round(weatherData.current.temp_c),
                tempF: Math.round(weatherData.current.temp_f),
                feelsLike: '',
                feelsLikeC:Math.round(weatherData.current.feelslike_c),
                feelsLikeF:Math.round(weatherData.current.feelslike_f),
                humidity: weatherData.current.humidity,
                clouds: weatherData.current.cloud,
                chanceOfRain: weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
                uv: weatherData.current.uv,
                vis: '',
                visKm: weatherData.current.vis_km,
                visMiles: weatherData.current.vis_miles,
                windSpeed: '',
                windSpeedKph: weatherData.current.wind_kph,
                windSpeedMph: weatherData.current.wind_mph,
                windDirection: weatherData.current.wind_dir,
                windDegree: weatherData.current.wind_degree
            },
            forecast: [...weatherData.forecast.forecastday],
        }

        return processedData
    }

    async function fetchWeatherData(location, units) {
        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3`, 
            { mode: 'cors' }
        )
        const weatherData = await response.json()
        return processData({ weatherData, units })
    }

    async function fetchData(location, units) {
        const weatherData = await fetchWeatherData(location, units)
        return weatherData
    }

    return {
        fetchData
    }
})();

export default api;
  