export function calculateAge(date: string) {
  const formattedDate = date.split("-");
  const birthdateTimeStamp = new Date(
    Number(formattedDate[2]),
    Number(formattedDate[1]) - 1,
    Number(formattedDate[0])
  );
  const currentDate = new Date().getTime();
  const difference = currentDate - birthdateTimeStamp.getTime();
  const currentAge = Math.floor(difference / 31557600000);
  return currentAge;
}
