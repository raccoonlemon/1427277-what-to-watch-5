export const getDateTimeForHTML = (date, withTime = true) => {

  const day = addZeroDigit(date.getDate());
  const month = addZeroDigit(date.getMonth() + 1);
  const year = date.getFullYear();

  const time = formatTime(date);
  return `${year}-${month}-${day}${withTime ? `T${time}` : ``}`;
};

export const formatTime = (date) => {

  const hours = addZeroDigit(date.getUTCHours() % 12);
  const minutes = addZeroDigit(date.getUTCMinutes());

  return `${hours}:${minutes}`;
};

const addZeroDigit = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const getFormattedFilmDuration = (totalMimutes) =>{

  const hours = Math.trunc(totalMimutes / 60);
  const minutes = totalMimutes - hours * 60;

  const result = [];

  if (hours > 0) {
    result.push(`${hours}h`);
  }

  if (minutes > 0) {
    result.push(`${addZeroDigit(minutes)}m`);
  }

  return result.join(` `);
};

export const getFormattedVideoDuration = (totalSeconds) =>{

  totalSeconds = Math.trunc(totalSeconds);
  const totalMimutes = Math.trunc(totalSeconds / 60);

  const hours = Math.trunc(totalSeconds / 60 / 60);
  const minutes = totalMimutes - hours * 60;
  const seconds = totalSeconds - minutes * 60 - hours * 60 * 60;

  const result = [];

  result.push(`${hours}`);
  result.push(`${addZeroDigit(minutes)}`);
  result.push(`${addZeroDigit(seconds)}`);

  return result.join(`:`);
};

export const getFormattedReviewDate = (date) =>{
  const month = date.toLocaleString(`en-US`, {month: `long`});
  const year = date.getFullYear();
  const day = date.getDate();
  return `${month} ${day}, ${year}`;
};
