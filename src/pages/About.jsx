//4- Refactoring with hook
import { useCounterContext } from "../hooks/useCounterContext.jsx";

const About = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>About</h1>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default About;
