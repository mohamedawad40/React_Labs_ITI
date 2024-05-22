import "./App.css";
import { NavScroll } from "./components/Navbar";
import { Slider } from "./components/Slider";
import { Prds } from './components/Prds';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export function App() {
 
  return (
    <div className="App">
      <NavScroll></NavScroll>
      <Slider></Slider>
      <Prds/>
    </div>
  );
}
