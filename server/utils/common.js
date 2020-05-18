const jsonQuery = require('json-query');

module.exports = {
    GetMetricOrder: (duration) => {
        let today = new Date(),
            year = today.getFullYear(),
            month = today.getMonth() + 1,
            i = 0;
        let metricorder = [];

        do {
            if (month < 1) {
                month = 12;
                year--;
            }
            if (month.toString().length < 2) {
                metricorder.push({
                    merticorder: year.toString() + '0' + month.toString(),
                    metricmonth: month,
                    metricyear: year
                });
            } else {
                metricorder.push({
                    merticorder: year.toString() + month.toString(),
                    metricmonth: month,
                    metricyear: year
                });
            }
            month--;
            i++;
        } while (i < duration);
        return metricorder;
    },
    GetJsonQuery: (data, query) => {
        return jsonQuery(query, {
            data: data
        }).value;
    }
};