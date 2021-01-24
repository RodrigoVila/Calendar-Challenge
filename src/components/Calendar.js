import MonthPicker from "./MonthPicker";
import DaysOfTheWeek from "./DaysOfTheWeek";
import Grid from "./Grid";
import CurrentMonth from "./CurrentMonth";

// Work your magic here!
export const Calendar = () => {
  return (
    <>
      <div className="w-full h-full max-w-screen-lg lg:text-sm flex flex-col m-auto">
        <MonthPicker />
        <div className="flex">
          <DaysOfTheWeek />
        </div>
        <Grid>
          <CurrentMonth />
        </Grid>
      </div>
    </>
  );
};
