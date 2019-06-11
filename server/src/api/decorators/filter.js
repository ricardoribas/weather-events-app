module.exports = (function() {
    let $decorator = {};

    return {
        withDate(date) {
            if (!!date) {
                $decorator.date = {
                    '$lte': new Date(date)
                }
            }

            return this;
        },
        withLocation(location) {
            if (!!location) {
                $decorator.location = location;
            }

            return this;
        },
        get() {
            return $decorator;
        }
    }
})();