import { useContext } from "react";
import { CounterContext } from "../context/CounterContext.jsx";

const Home = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Home</h1>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default Home;
