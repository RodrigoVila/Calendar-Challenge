import useWindowDimensions from "../helpers/useWindowDimensions";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//This displays the days of the week at the beginning of the grid
const DaysOfTheWeek = () => {
  const { width } = useWindowDimensions();

  return days.map((day) => (
    <div
      key={day}
      className="w-full text-center h-10 text-l md:text-xl font-bold items-center justify-center"
    >
      {width < 640 ? day.substring(0, 3) : day}
    </div>
  ));
};

export default DaysOfTheWeek;
