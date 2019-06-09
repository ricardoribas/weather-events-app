const DEFAULT_FORECAST = {
    summary: 'Unknown',
    temperature: -1
};

module.exports = (function() {
    let $decorator = undefined;

    return {
        from($event) {
            $decorator = $event;

            return this;
        },
        withForecast(forecast) {
            $decorator.weather = !forecast ?
                DEFAULT_FORECAST : {
                    summary: forecast.currently.summary,
                    temperature: forecast.currently.temperature
                }

            return this;
        },
        get() {
            return $decorator;
        }
    }
})();