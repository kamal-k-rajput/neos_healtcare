import "./App.css";
import { Navbar } from "./components/Header/Navbar";
import { Input } from "./components/Todo/Input";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Input />
    </div>
  );
}

export default App;
