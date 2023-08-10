//4- Refactoring with hook
import ChangeCounter from "../components/ChangeCounter.jsx";

import { useCounterContext } from "../hooks/useCounterContext.jsx";

//5- Complex context
import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";

const Home = () => {
  const { counter } = useCounterContext();

  //5- Complex context
  const { color, dispatch } = useTitleColorContext();

  //6- Chaging complex context
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Counter: {counter}</p>
      {/* 3- Changin the context value */}
      <ChangeCounter />
      {/* 6- Changing complex context  */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        <button onClick={() => setTitleColor("PURPLE")}>Roxo</button>
      </div>
    </div>
  );
};

export default Home;
