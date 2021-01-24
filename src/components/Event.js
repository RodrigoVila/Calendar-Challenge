import useWindowDimensions from "../helpers/useWindowDimensions";

const Event = ({ event }) => {
  const { width } = useWindowDimensions();

  const { title, date } = event;

  //It displays or trim event title depending on screen size
  const formattedTitle = () => {
    if (width <= 1024 && title.length > 6) {
      const newTitle = title.substring(0, 6) + "...";
      return newTitle;
    } else if (title.length > 10) {
      const newTitle = title.substring(0, 10) + "...";
      return newTitle;
    }
    return title;
  };
  return (
    <div className="flex md:mx-2 md:px-1 lg:m-0 lg:p-0 items-center bg-blue-300 text-gray-800 shadow-l">
      <div className="lg:pl-1">{date.toString().substring(16, 21)}</div>
      <div className="hidden lg:flex ml-3 text-l">{formattedTitle()}</div>
    </div>
  );
};

export default Event;
