
import './App.css';
import {ThemeProvider} from "react-bootstrap";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Slider from "./components/Swiper/Slider";

function App() {
  return (
       <ThemeProvider dir={"rtl"}>
         <Login/>
       </ThemeProvider>
  );
}

export default App;
