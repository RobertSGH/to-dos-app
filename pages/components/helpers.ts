const getFormattedDate = (arg: any): string => {
  const today = new Date();
  const currentDay = today.toLocaleDateString('en-US', { weekday: 'long' });
  const currentMonth = today.toLocaleDateString('en-US', { month: 'long' });
  const currentNumDay = today.getDate();

  return `${currentDay}, ${currentNumDay}, ${currentMonth} `;
};

export default getFormattedDate;
