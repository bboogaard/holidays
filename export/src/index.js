var Holidays = require('date-holidays');
var slugify = require('slugify');

var hd = new Holidays('NL', '', '', {types: ['public']});
var currentYear = new Date().getFullYear();
var numYears = 50; // Adjust to set range of export
var dates = {};
for (var i = 0; i < numYears; i++) {
    let holidays = hd.getHolidays(currentYear + i);
    let jj = holidays.length;
    let yearDates = {};
    for (var ii = 0; ii < jj; ii++) {
        let month = holidays[ii].start.getMonth();
        let date = holidays[ii].start.getDate();
        if (month == 4 && date == 5) {
            if ((currentYear + i) % 5 != 0) {
                continue;
            }
        }
        let key = slugify(
            holidays[ii].name,
            {
                replacement: '-',
                remove: /[.]/g,
                lower: true
            }
        );
        yearDates[key] = {
            name: holidays[ii].name,
            date: [(currentYear + i), month, date].join(',')
        };
    }
    dates[currentYear + i] = yearDates;
}
document.write(JSON.stringify(dates));
