import moment from 'moment';

export const getFullDate = (date: Date) =>
  moment(new Date(date)).format('YYYY-MM-DD');

export const getFullTime = (date: Date) =>
  moment(new Date(date), 'hh').format('hh:mm a');
