
import './App.css';
import {ThemeProvider} from "react-bootstrap";
import Index from "./pages/Index";

function App() {
  return (
       <ThemeProvider dir={"rtl"}>
         <Index/>
       </ThemeProvider>
  );
}

export default App;
