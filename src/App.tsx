import "./App.css";

function App() {
  return (
    <div>
      <span className="timer__heading">Zeit festlegen</span>
      <br />
      <input type="number" value={0} />
      <br />
      <span className="timer__subtitle">Time left:</span>
      <br />
      <span className="time__time-left">0.000s</span>
      <div className="timer__button-row">
        <button className="timer__start">Start</button>

        <button className="timer__pause">Pause</button>

        <button className="timer__reset">Reset</button>
      </div>
    </div>
  );
}

export default App;
