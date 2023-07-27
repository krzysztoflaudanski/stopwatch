import Button from "./components/Button/Button";
import DisplayComponent from "./components/DisplayComponent/DisplayComponent";
import { useState, useEffect } from "react";

const App = () => {

  const [time, setTime] = useState(0);
  const [interv, setInterv] = useState(null);

  const start = () => {
    setInterv(setInterval(() => {
      setTime(time => time + 1);
    }, 1))
  }

  const stop = (e) => {
    e.preventDefault();
    clearInterval(interv)
  }

  const reset = (e) => {
    e.preventDefault();
    clearInterval(interv);
    setInterv(null);
    setTime(0)
  }

  useEffect(() => {
    return () => {
      if (interv) clearInterval(interv);
    };
  }, []);

  return (
    <div>
      <DisplayComponent time={time} />
      <Button onClick={start}>Start</Button>
      <form onSubmit={stop}>
        <Button >Stop</Button>
      </form>
      <form onSubmit={reset}>
        <Button>Reset</Button>
      </form>
    </div >
  );
}

export default App;
