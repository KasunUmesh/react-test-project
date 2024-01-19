import moment from "moment";

export function formatDate(date: Date | string): string {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}