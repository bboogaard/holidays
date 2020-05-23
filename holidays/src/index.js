var dates = require('../data/holidays.json');

function getHolidayDate(year, holiday) {
    var yearDates = dates[year] !== undefined ? dates[year] : {};
    var date = yearDates[holiday] !== undefined ? yearDates[holiday] : null;
    if (!date) {
        return null;
    }
    let [yr, mn, dt] = date.date.split(',');
    return new Date(yr, mn, dt);
}

module.exports = {getHolidayDate: getHolidayDate}
