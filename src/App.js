
import './App.css';
import {ThemeProvider} from "react-bootstrap";
import Route from "./Routes/Route";

function App() {
  return (
       <ThemeProvider dir={"rtl"}>
         <Route/>
       </ThemeProvider>
  );
}

export default App;
