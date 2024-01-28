const api = (() => {
    const API_KEY = 'dbf592303e174c8d8d620709242601'

    async function processData(data) {
        const { weatherData, units } = data

        const processedData = {
            units,
            location: {
                city: weatherData.location.name,
                region: weatherData.location.region,
                country: weatherData.location.country
            },
            current: {
                time: weatherData.location.localtime,
                description: weatherData.current.condition.text,
                tempC: Math.round(weatherData.current.temp_c),
                tempF: Math.round(weatherData.current.temp_f),
                feelsLikeC:Math.round(weatherData.current.feelslike_c),
                feelsLikeF:Math.round(weatherData.current.feelslike_f),
                humidity: weatherData.current.humidity,
                clouds: weatherData.current.cloud,
                uvi: weatherData.current.uvi,
                visibility: weatherData.current.vis_miles,
                windSpeedKph: weatherData.current.wind_kph,
                windSpeedMph: weatherData.current.wind_mph,
                windDirection: weatherData.current.wind_dir,
                windDegree: weatherData.current.wind_degree 
            }
        }

        return processedData
    }

    async function fetchWeatherData(location, units = 'imperial') {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`, 
            { mode: 'cors' },
        )
        const weatherData = await response.json()

        console.log('From API:', weatherData)
        return processData({ weatherData, units })
    }

    return {
        fetchWeatherData
    }
})();

export default api;
  