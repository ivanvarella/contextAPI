//4- Refactoring with hook
import { useCounterContext } from "../hooks/useCounterContext.jsx";

import ChangeCounter from "../components/ChangeCounter.jsx";

const Home = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Counter: {counter}</p>
      {/* 3- Changin the context value */}
      <ChangeCounter />
    </div>
  );
};

export default Home;
