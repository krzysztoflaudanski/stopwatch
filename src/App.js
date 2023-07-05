import Button from "./components/Button/Button";
import DisplayComponent from "./components/DisplayComponent/DisplayComponent";
import { useState } from "react";
import { useEffect } from "react";


const App = () => {

  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();

  const start = (e) => {
    e.preventDefault();
    run();
    setInterv(setInterval(run, 1));
  }

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 1000) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  }

  const stop = (e) => {
    e.preventDefault();
    clearInterval(interv);
  }

  const reset = (e) => {
    e.preventDefault()
    clearInterval(interv)
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  }

  useEffect(() => {
    return () => {
      if (interv) clearInterval(interv);
    };
  }, []);

  return (
    <div>
      <DisplayComponent time={time} />
      <form onSubmit={start}>
        <Button>Start</Button>
      </form>
      <form onSubmit={stop}>
        <Button >Stop</Button>
      </form>
      <form onSubmit={reset}>
        <Button>Reset</Button>
      </form>
    </div>
  );
}

export default App;
