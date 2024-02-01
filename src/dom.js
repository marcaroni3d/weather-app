const dom = (() => {
    function renderApp(data, units) {
        renderCurrent(data, units)
        renderForecast(data, units)
        console.log(data)
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
                data.weatherData.current.temp = data.weatherData.current.tempC
                data.weatherData.current.feelsLike = data.weatherData.current.feelsLikeC
                data.weatherData.current.vis = data.weatherData.current.visKm
                data.weatherData.current.windSpeed = data.weatherData.current.windSpeedKph
            }
            if (units == 'imperial') { 
                data.weatherData.current.temp = data.weatherData.current.tempF
                data.weatherData.current.feelsLike = data.weatherData.current.feelsLikeF
                data.weatherData.current.vis = data.weatherData.current.visMiles
                data.weatherData.current.windSpeed = data.weatherData.current.windSpeedMph
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

        locationDisplay.innerHTML = `${data.weatherData.location.city}, ${data.weatherData.location.country}`
        dateDisplay.innerHTML = `${data.weatherData.current.date}`
        currentTempDisplay.innerHTML = `${data.weatherData.current.temp}°${tempType}`
        descriptionDisplay.innerHTML = `${data.weatherData.current.description}`
        feelsLikeDisplay.innerHTML = `${data.weatherData.current.feelsLike}°${tempType}`
        windDisplay.innerHTML = `${data.weatherData.current.windSpeed} ${unitType} ${data.weatherData.current.windDirection}`
        humidityDisplay.innerHTML = `${data.weatherData.current.humidity}%`
        uvDisplay.innerHTML = `${data.weatherData.current.uv}`
        visibilityDisplay.innerHTML = `${data.weatherData.current.vis} ${unitType}`
        cloudDisplay.innerHTML = `${data.weatherData.current.clouds}%`
        chanceOfRainDisplay.innerHTML = `${data.weatherData.current.chanceOfRain}%`
    }

    function renderForecast(data, units) {
        const forecastData = data.weatherData.forecast
        const display = document.querySelector('.forecast')
        display.innerHTML = ''

        forecastData.forEach(element => {
            let tempHigh
            let tempLow
            const weatherCode = element.day.condition.weatherCode
            const date = new Date(element.date) //CURRENT ERROR: date is one day off
            const day = date.getDay(date)
            const dayOfWeek = formatDay(day)
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
            const tempHighDisplay = document.createElement('h2')
            const tempLowDisplay = document.createElement('h2')

            content.classList.add('forecast-item')
            tempLowDisplay.classList.add('light-blue')
            
            dayDisplay.innerHTML = dayOfWeek
            tempHighDisplay.innerHTML = tempHigh
            tempLowDisplay.innerHTML = tempLow


            content.appendChild(dayDisplay)
            content.appendChild(tempHighDisplay)
            content.appendChild(tempLowDisplay)

            display.appendChild(content)
        })

        function formatDay(index) {
            const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
            let day = days[index]
            return day
        }
    }

    return {
        renderApp
    }
})();

export default dom;