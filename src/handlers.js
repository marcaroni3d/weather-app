import api from "./api";
import dom from "./dom";

const handlers = (() => {
    const topNav = document.querySelector('.top-nav')
    const searchInput = document.querySelector('.search-input')
    const settingsMetric = document.querySelector('.settings-metric')
    const settingsImperial = document.querySelector('.settings-imperial')

    async function load(input = 'Cincinnati', units = 'Imperial') {
        const weatherData = await api.fetchWeatherData(input, units)
        dom.renderApp(weatherData, units)
    }

    function searchHandler() {
        let input
        let units

        topNav.addEventListener('click', async (e) => {
            if (
                e.target.classList.contains('submit') ||
                e.target.parentElement.classList.contains('submit')
            ) {
                e.preventDefault()
                input = searchInput.value
                load(input, units)
            } else if (e.target.classList.contains('settings-metric')) {
                units = 'metric'
                settingsImperial.classList.remove('settings-active')
                settingsMetric.classList.add('settings-active')
                load(input, units)
            } else if (e.target.classList.contains('settings-imperial')) {
                units = 'imperial'
                settingsMetric.classList.remove('settings-active')
                settingsImperial.classList.add('settings-active')
                load(input, units)
            }
        })
    }

    return {
        load,
        searchHandler
    }
})();

export default handlers;