const moment = require('moment');

const DATE_FORMAT = 'YYYY-MM-DD';

module.exports = {
    getSimpleDate(date) {
        return moment(date).format(DATE_FORMAT);
    } 
};