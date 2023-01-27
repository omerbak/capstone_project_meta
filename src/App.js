import Homepage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
import SharedLayout from "./components/SharedLayout";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="ReserveTable" element={<BookingPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
