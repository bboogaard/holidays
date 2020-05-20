var dates = require('../data/holidays.json');

function leadingZero(val) {
    return ('0' + val).slice(-2);
}

function formatDate(dt) {
    return dt.getFullYear() + '-' + leadingZero(dt.getMonth() + 1) + '-' + leadingZero(dt.getDate());
}

function isHoliday(dt) {
    var date = formatDate(dt);
    return dates.indexOf(date) !== -1;
}

module.exports = {isHoliday: isHoliday}
