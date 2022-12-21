
import './App.css';
import {ThemeProvider} from "react-bootstrap";
import Route from "./Routes/Route";
import Footer from "./components/footer/Footer";

function App() {
  return (
       <ThemeProvider dir={"rtl"}>
         <Footer/>
       </ThemeProvider>
  );
}

export default App;
