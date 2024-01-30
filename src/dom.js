const dom = (() => {
    const main = document.querySelector('main')

    function renderApp(data, units) {
        renderForecast(data, units)
    }

    function renderForecast(data, units) {
        let unitType
        let speedType
        let tempType
        if (units == 'imperial') {
            unitType = 'miles'
            speedType = 'mph'
            tempType = 'F'
        }
        if (units == 'metric') {
            unitType = 'km'
            speedType = 'm/s'
            tempType = 'C'
        }

        const formatData = (() => {
            if (units == 'metric') { 
                data.current.temp = data.current.tempC
                data.current.feelsLike = data.current.feelsLikeC
                data.current.vis = data.current.visKm
                data.current.windSpeed = data.current.windSpeedKph
            }
            if (units == 'imperial') { 
                data.current.temp = data.current.tempF
                data.current.feelsLike = data.current.feelsLikeF
                data.current.vis = data.current.visMiles
                data.current.windSpeed = data.current.windSpeedMph
            }
        })()

        const locationDisplay = document.querySelector('.location-display')
        const timeDisplay = document.querySelector('.time-display')
        const currentTempDisplay = document.querySelector('.current-temp')
        const descriptionDisplay = document.querySelector('.description')
        const feelsLikeDisplay = document.querySelector('.feels-like')
        const windDisplay = document.querySelector('.wind-data')
        const humidityDisplay = document.querySelector('.humidity-data')
        const uvDisplay = document.querySelector('.uv-data')
        const visibilityDisplay = document.querySelector('.visibility-data')
        const cloudDisplay = document.querySelector('.cloud-data')

        locationDisplay.innerHTML = `${data.location.city}, ${data.location.country}`
        timeDisplay.innerHTML = `${data.current.time}`
        currentTempDisplay.innerHTML = `${data.current.temp}°${tempType}`
        descriptionDisplay.innerHTML = `${data.current.description}`
        feelsLikeDisplay.innerHTML = `${data.current.feelsLike}°${tempType}`
        windDisplay.innerHTML = `${data.current.windSpeed} ${unitType} ${data.current.windDirection}`
        humidityDisplay.innerHTML = `${data.current.humidity}%`
        uvDisplay.innerHTML = `${data.current.uv}`
        visibilityDisplay.innerHTML = `${data.current.vis} ${unitType}`
        cloudDisplay.innerHTML = `${data.current.clouds}%`
    }

    return {
        renderApp
    }
})();

export default dom;