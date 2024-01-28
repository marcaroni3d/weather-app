import api from "./api";
import dom from "./dom";

const handlers = (() => {
    async function load(input = 'Cincinnati') {
        const weatherData = await api.fetchWeatherData(input)
        dom.logData(weatherData)
    }

    return {
        load
    }
})();

export default handlers;