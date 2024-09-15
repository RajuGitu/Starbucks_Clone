import Home from "./Components/Home";
import Order from "./Components/Order";
import Header from "./Components/Header";
import Drinks from "./Components/Drinks"; 
import Bestseller from "./Components/Bestseller"
import Foods from "./Components/Foods";
import Merchandise from "./Components/Merchandise";
import CoffeeAtHome from "./Components/CoffeeAtHome";
import ReadyToEat from "./Components/ReadyToEat";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate for redirection

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Order" element={<Order />}>
          <Route index element={<Navigate to="Bestseller" />} />
          <Route path="Bestseller" element={<Bestseller />} />
          <Route path="Drinks" element={<Drinks />} />
          <Route path="Foods" element={<Foods />} />
          <Route path="Merchandise" element={<Merchandise />} />
          <Route path="CoffeeAtHome" element={<CoffeeAtHome />} />
          <Route path="ReadyToEat" element={<ReadyToEat />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
