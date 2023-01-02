export const timeUntilEndOfYear = () => {
  // Get current date and time
  const currentDate = new Date();

  // Get end of year date and time
  const endOfYearDate = new Date('12/31/2023 23:59:59');

  // Calculate time difference in milliseconds
  const timeDifference = endOfYearDate.getTime() - currentDate.getTime();

  // Calculate time difference in days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Return time difference in days, hours, minutes, and seconds
  return {
    days,
    hours,
    minutes,
    seconds,
  };
};
