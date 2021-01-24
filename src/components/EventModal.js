import { useState } from "react";
import TimePicker from "./TimePicker";

const EventModal = ({ getDate, events, addEvent, toggleModal }) => {
  //Error handler for !title
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  //Handler that checks for errors, sends event data to the parent component and close the modal
  const handleAdd = () => {
    if (!title) {
      setErrorMessage("You need to add a title to your event");
      return;
    }
    addEvent({
      title: title,
      date: getDate(hours, minutes).toString(),
    });
    toggleModal();
  };

  return (
    <div className="h-screen w-screen absolute top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col w-full md:w-1/2 2xl:w-1/4 mx-2 p-2 bg-white rounded-2xl">
        <div className="text-black flex items-center justify-center text-3xl">
          {getDate(hours, minutes).toString().substring(0, 15)}
        </div>
        {/* {events.length === 0 ? (
          <div className="flex text-black  text-xl">
            No events to display...
          </div>
        ) : ( */}
        {events.map((event) => (
          <div className="flex text-black  text-xl">
            <div className="pr-2 font-bold">
              {event.date.toString().substring(16, 21)}
            </div>
            <div className="font-semibold">{event.title}</div>
          </div>
        ))}

        <input
          name="title"
          placeholder="Event Name"
          className="w-full h-10 pl-2 mt-5 rounded-md border border-blue-500 placeholder-black text-black text-xl"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TimePicker setHours={setHours} setMinutes={setMinutes} />
        <div className="w-full lg:flex lg:flex-row lg:my-4 items-center justify-center">
          <div
            className="flex items-center justify-center lg:self-center lg:w-1/2 mt-2 mb-1 lg:my-0 lg:mr-1 bg-blue-500 font-semibold text-xl"
            onClick={handleAdd}
          >
            Add
          </div>
          <div
            className="flex items-center justify-center lg:w-1/2 lg:mx-auto mb-2 mt-1 lg:my-0 bg-red-500 font-semibold text-xl"
            onClick={toggleModal}
          >
            Close
          </div>
        </div>
        {errorMessage && (
          <p className="text-red-500 font-semibold text-center text-xl">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default EventModal;
