const dom = (() => {
    const main = document.querySelector('main')
    const locationDisplay = document.querySelector('.location-display')

    function renderForecast(data, units) {
        let unitType
        let speedType
        let tempType
        if (units === 'Imperial') {
            unitType = 'miles'
            speedType = 'mph'
            tempType = '°F'
        }
        if (units === 'Metric') {
            unitType = 'km'
            speedType = 'm/s'
            tempType = '°C'
        }

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
        currentTempDisplay.innerHTML = `${data.current.tempF}${tempType}`
        descriptionDisplay.innerHTML = `${data.current.description}`
        feelsLikeDisplay.innerHTML = `${data.current.feelsLikeF}${tempType}`
        windDisplay.innerHTML = `${data.current.windSpeedMph} ${unitType} ${data.current.windDirection}`
        humidityDisplay.innerHTML = `${data.current.humidity}%`
        uvDisplay.innerHTML = `${data.current.uv}`
        visibilityDisplay.innerHTML = `${data.current.visMiles} ${unitType}`
        cloudDisplay.innerHTML = `${data.current.clouds}%`
    }

    function renderApp(data, units) {
        renderForecast(data, units)
    }

    return {
        renderApp
    }
})();

export default dom;