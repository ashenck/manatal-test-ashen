import moment from 'moment';

export default {
  format_date(value) {
    if (value && moment(value).isValid()) {
      try {
        return moment(String(value)).format('Do MMM YYYY');
      } catch (error) {
        return 'Invalid date';
      }
    }
    return 'Invalid date';
  },
};
