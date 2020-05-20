var Holidays = require('date-holidays');
var hd = new Holidays('NL', '', '', {types: ['public']});
var currentYear = new Date().getFullYear();
var numYears = 50; // Adjust to set range of export
var dates = [];
for (var i = 0; i < numYears; i++) {
    let holidays = hd.getHolidays(currentYear + i);
    let jj = holidays.length;
    for (var ii = 0; ii < jj; ii++) {
        let month = holidays[ii].start.getMonth() + 1;
        let date = holidays[ii].start.getDate();
        if (month == 5 && date == 5) {
            if ((currentYear + i) % 5 != 0) {
                continue;
            }
        }
        dates.push(holidays[ii].date.substr(0, 10));
    }
}
document.write(JSON.stringify(dates));
