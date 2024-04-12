import "./App.css";
import CurrencyConvertor from "./components/currency-convertor";

// TODO: add proper types and interface later
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="container">
        <CurrencyConvertor />
      </div>
    </div>
  );
};

export default App;
