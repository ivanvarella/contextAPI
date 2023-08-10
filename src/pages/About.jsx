//4- Refactoring with hook
import { useCounterContext } from "../hooks/useCounterContext.jsx";

//5- Complex context
import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";

const About = () => {
  const { counter } = useCounterContext();

  //5- Complex context
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default About;
