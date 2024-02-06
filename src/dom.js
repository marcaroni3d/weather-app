const dom = (() => {
    function renderApp(data, units) {
        renderCurrent(data, units)
        renderForecast(data, units)
    }

    function renderCurrent(data, units) {
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
        const dateDisplay = document.querySelector('.date-display')
        const currentTempDisplay = document.querySelector('.current-temp')
        const descriptionDisplay = document.querySelector('.description')
        const feelsLikeDisplay = document.querySelector('.feels-like')
        const windDisplay = document.querySelector('.wind-data')
        const humidityDisplay = document.querySelector('.humidity-data')
        const uvDisplay = document.querySelector('.uv-data')
        const visibilityDisplay = document.querySelector('.visibility-data')
        const cloudDisplay = document.querySelector('.cloud-data')
        const chanceOfRainDisplay = document.querySelector('.precipitation-data')
        const weatherIconDisplay = document.querySelector('.current-icon')

        locationDisplay.innerHTML = `${data.location.city}, ${data.location.country}`
        dateDisplay.innerHTML = `${data.current.date}`
        currentTempDisplay.innerHTML = `${data.current.temp}°${tempType}`
        descriptionDisplay.innerHTML = `${data.current.description}`
        feelsLikeDisplay.innerHTML = `${data.current.feelsLike}°${tempType}`
        windDisplay.innerHTML = `${data.current.windSpeed} ${unitType} ${data.current.windDirection}`
        humidityDisplay.innerHTML = `${data.current.humidity}%`
        uvDisplay.innerHTML = `${data.current.uv}`
        visibilityDisplay.innerHTML = `${data.current.vis} ${unitType}`
        cloudDisplay.innerHTML = `${data.current.clouds}%`
        chanceOfRainDisplay.innerHTML = `${data.current.chanceOfRain}%`
        weatherIconDisplay.src = `${data.current.weatherIcon}`
    }

    function renderForecast(data, units) {
        const forecastData = data.forecast
        const display = document.querySelector('.forecast')
        display.innerHTML = ''

        forecastData.forEach(element => {
            let tempHigh
            let tempLow
            const d = new Date(element.date)
            d.setDate(d.getDate() + 1) // Bug fix: default Date is otherwise one day behind
            const day = d.toLocaleDateString([], { weekday: 'long'})

            if (units == 'imperial') {
                tempHigh = Math.round(element.day.maxtemp_f)
                tempLow = Math.round(element.day.mintemp_f)
            }
            if (units == 'metric') {
                tempHigh = Math.round(element.day.maxtemp_c)
                tempLow = Math.round(element.day.mintemp_c)
            }

            const content = document.createElement('div')
            const dayDisplay = document.createElement('h2')
            const iconDisplay = document.createElement('img')
            const tempHighDisplay = document.createElement('h2')
            const tempLowDisplay = document.createElement('h2')

            content.classList.add('forecast-item')
            tempLowDisplay.classList.add('light-blue')
            
            dayDisplay.innerHTML = day
            iconDisplay.src = `https:${element.day.condition.icon}`
            tempHighDisplay.innerHTML = tempHigh
            tempLowDisplay.innerHTML = tempLow


            content.appendChild(dayDisplay)
            content.appendChild(iconDisplay)
            content.appendChild(tempHighDisplay)
            content.appendChild(tempLowDisplay)

            display.appendChild(content)
        })
    }

    return {
        renderApp
    }
})();

export default dom;