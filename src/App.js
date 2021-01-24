import { ContextProvider } from "./context/AppContext";
import { Calendar } from "./components/Calendar";

export const App = () => {
  return (
    <ContextProvider>
      <div className="w-full h-screen bg-gray-700 text-gray-200">
        <Calendar />
      </div>
    </ContextProvider>
  );
};
