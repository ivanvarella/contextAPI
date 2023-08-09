//4- Refactoring with hook
import { useCounterContext } from "../hooks/useCounterContext.jsx";

const Products = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Products</h1>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default Products;
