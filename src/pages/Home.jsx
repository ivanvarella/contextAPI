import { useContext } from "react";
import { CounterContext } from "../context/CounterContext.jsx";
import ChangeCounter from "../components/ChangeCounter.jsx";

const Home = () => {
  const { counter } = useContext(CounterContext);

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
