function appendZero(num) {
  return num > 9 ? `${num}` : `0${num}`;
}
function parseDate(item) {
  let date = new Date(item);
  let year = date.getFullYear();
  let month = appendZero(date.getMonth());
  let day = appendZero(date.getDate());
  let offset = date.getTimezoneOffset() / -60;
  let needPlus = offset >= 0 ? "+" : "";

  let hours = appendZero(date.getHours());
  let minutes = appendZero(date.getMinutes());

  return `${year}-${month}-${day} ${hours}:${minutes} GMT ${needPlus}${offset}`;
}

export { appendZero, parseDate };
