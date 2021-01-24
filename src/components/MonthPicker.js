import { useContext } from "react";
import { LeftArrow, RightArrow } from "./Arrows";
import { DateContext } from "../context/AppContext";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthPicker = () => {
  const [date, setDate] = useContext(DateContext);

  //Selects previous month
  const goToPrevMonth = () => {
    const currentMonth = date.getMonth();
    const newDate = new Date(
      date.getFullYear(),
      currentMonth - 1,
      date.getDate()
    );
    setDate(newDate);
  };

  //Selects next month
  const goToNextMonth = () => {
    const currentMonth = date.getMonth();
    const newDate = new Date(
      date.getFullYear(),
      currentMonth + 1,
      date.getDate()
    );
    setDate(newDate);
  };

  return (
    <div className="w-full h-20 px-2 flex items-center justify-between">
      <LeftArrow onClick={goToPrevMonth} />
      <div className="flex-col text-center">
        <div className="font-bold text-3xl">{months[date.getMonth()]}</div>
        <div className="font-bold text-xl">
          {date.toString().substring(0, 15)}
        </div>
      </div>
      <RightArrow onClick={goToNextMonth} />
    </div>
  );
};

export default MonthPicker;
