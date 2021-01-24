import { createContext, useState, useEffect } from "react";

const DateContext = createContext();
const EventsContext = createContext();

const ContextProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState(
    JSON.parse(window.localStorage.getItem("events")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("events", JSON.stringify(events));
  }, [events]);
  return (
    <DateContext.Provider value={[date, setDate]}>
      <EventsContext.Provider value={[events, setEvents]}>
        {children}
      </EventsContext.Provider>
    </DateContext.Provider>
  );
};

export { DateContext, EventsContext, ContextProvider };
