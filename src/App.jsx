import { Timer } from "./components";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <h3>Stopwatch</h3>
            <div className="stopwatch-card">
                <Timer />
            </div>
        </div>
    );
}

export default App;
