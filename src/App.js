import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import WeatherDetails from "./pages/WeatherDetails";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/weather-details" element={<WeatherDetails />}/>
                <Route path="/news" element={<News />}/>
                <Route path="/news/:id" element={<News />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </Router>
  );
}

export default App;




























