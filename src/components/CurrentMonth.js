import { useContext } from "react";
import { DateContext } from "../context/AppContext";
import Date from "./Date";

const CurrentMonth = () => {
  const [date] = useContext(DateContext);

  //Function that gets how many days there are in the selected month
  const getDatesForMonth = (month, year) => {
    return new window.Date(year, month, 0).getDate();
  };

  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  //Get the index to know where to locate the first day [0-6]
  const firstDayIndex = date.getDay();

  //Get the index to know where to locate the last day of the month [0-6]
  //TODO: This is not working properly when month starts on Sunday [0]
  const lastDayIndex = new window.Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDay();

  //How many days do we need to fill the calendar backwards
  const daysInPrevMonth = () => {
    let days = [];
    const daysInLastMonth = getDatesForMonth(currentMonth, currentYear);
    const prevDaysToShow = daysInLastMonth - firstDayIndex + 2;

    for (let i = prevDaysToShow; i <= daysInLastMonth; i++) {
      days.push(i);
    }
    return days;
  };

  //How many days current month has
  const daysInCurrentMonth = () => {
    let days = [];
    const currentDays = getDatesForMonth(currentMonth + 1, currentYear);

    for (let i = 1; i <= currentDays; i++) {
      days.push(i);
    }
    return days;
  };

  //How many days do we need to complete the calendar grid
  const daysInNextMonth = () => {
    let days = [];
    for (let i = 1; i < 7 - lastDayIndex; i++) {
      days.push(i);
    }
    return days;
  };

  return (
    <>
      {daysInPrevMonth().map((day) => (
        <Date key={day} day={day} pastMonth />
      ))}
      {daysInCurrentMonth().map((day) => (
        <Date key={day} day={day} />
      ))}
      {daysInNextMonth().map((day) => (
        <Date key={day} day={day} nextMonth />
      ))}
    </>
  );
};

export default CurrentMonth;
