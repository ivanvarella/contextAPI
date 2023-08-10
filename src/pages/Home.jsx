//4- Refactoring with hook
import ChangeCounter from "../components/ChangeCounter.jsx";

import { useCounterContext } from "../hooks/useCounterContext.jsx";

//5- Complex context
import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";

const Home = () => {
  const { counter } = useCounterContext();

  //5- Complex context
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Counter: {counter}</p>
      {/* 3- Changin the context value */}
      <ChangeCounter />
    </div>
  );
};

export default Home;
