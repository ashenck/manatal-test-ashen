import moment from 'moment';

export default {
  format_date(value) {
    if (value) {
      return moment(String(value)).format('DD MMM YYYY');
    }
    return 'Invalid date';
  },
};
