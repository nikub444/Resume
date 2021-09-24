import CV from "react-cv";
import { CVData } from "./data.js";

function App() {
  return (
    <div className="App">
      <CV {...CVData} />
    </div>
  );
}

export default App;
