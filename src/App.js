import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { WeightInput } from "./components/WeightInput";
import { TimeLine } from "./components/TimeLine";
import { WeightList } from "./components/WeightList";

function App() {
  const [weightObjects, setWeightObjects] = useState([]);

  return (
    <>
      <Navigation title="Weight Tracker" />
      {weightObjects.length > 0 && <TimeLine weightObjects={weightObjects} />}
      <WeightInput
        weightObjects={weightObjects}
        setWeightObjects={setWeightObjects}
      />
      {weightObjects.length > 0 && (
        <WeightList
          weightObjects={weightObjects}
          setWeightObjects={setWeightObjects}
        />
      )}
    </>
  );
}

export default App;
