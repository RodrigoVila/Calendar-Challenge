import { useContext, useState } from "react";
import { DateContext, EventsContext } from "../context/AppContext";
import useWindowDimensions from "../helpers/useWindowDimensions";
import Event from "./Event";
import EventModal from "./EventModal";

const Date = ({ day, pastMonth, nextMonth }) => {
  const [date] = useContext(DateContext);
  const [events, setEvents] = useContext(EventsContext);

  const { width } = useWindowDimensions();
  const [isModalOpen, setModalOpen] = useState(false);

  //Toggles Event modal
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  //Gets date for selected grid
  const getDate = (hours, minutes) => {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    if (pastMonth) {
      return new window.Date(
        currentYear,
        currentMonth - 1,
        day,
        hours,
        minutes
      );
    } else if (nextMonth) {
      return new window.Date(
        currentYear,
        currentMonth + 1,
        day,
        hours,
        minutes
      );
    } else {
      return new window.Date(currentYear, currentMonth, day, hours, minutes);
    }
  };

  //Adds event to array
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  //It compares first 15 chars to match date and sort them by time
  const displayEvents = () => {
    const currentDate = getDate(0, 0).toString().substring(0, 15);
    return events
      .filter((evt) => evt.date.substring(0, 15) === currentDate)
      .sort((a, b) => {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0;
      });
  };

  const textColor = (pastMonth || nextMonth) && "text-gray-500";
  const bgColor = displayEvents().length > 0 && "bg-green-500";
  return (
    <>
      <div
        className={`lg:max-h-50 overflow-hidden border rounded-lg border-gray-500 font-semibold md:font-bold cursor-pointer hover:bg-blue-600 lg:m-1 ${textColor} ${bgColor} md:bg-transparent`}
        onClick={toggleModal}
      >
        <div className="ml-1 md:text-xl">{day}</div>
        {width >= 768 &&
          events.length > 0 &&
          displayEvents()
            .slice(0, 2)
            .map((event) => <Event key={event.date} event={event} />)}
        {displayEvents().length > 3 && (
          <div className="text-center ">. . .</div>
        )}
      </div>
      {isModalOpen && (
        <EventModal
          getDate={getDate}
          events={displayEvents()}
          addEvent={addEvent}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default Date;
