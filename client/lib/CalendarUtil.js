import datejs from 'datejs';
import {getDayOfYear} from 'date-fns/get_day_of_year';

export default class CalendarUtil {

    getDayOfYear(month, day) {
        let date = new Date(1037, 0, 1, 0, 0, 0, 0);
        return getDayOfYear(date);
    }

    getMonth(day) {
        let date = new Date();
        date.addDays(day);
        return date.getMonth;
    }

    getDaysInMonth(month) {
        return datejs.Date.getDaysInMonth(1037, month);
    }

    getWeeksInMonth(month) {
        return datejs.Date.getWeeksInMonth(month);
    }
    
    getDateByDay(day) {
        let date = new Date(1037, 0, 1, 0, 0, 0, 0);
        date.addDays(day);
        return date.toLocaleString('en-us', { month: 'long', day: '2-digit' });
    }
}