const { getSimpleDate } = require('./../formatters');

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
        withDate() {
            $decorator.date = new Date($decorator.date);

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