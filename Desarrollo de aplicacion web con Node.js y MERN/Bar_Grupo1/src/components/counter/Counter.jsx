import useCounter from "../../customHooks/useCounter";

const Counter = () => {
  const { count, remove, add } = useCounter();
  return (
    <div>
      <button onClick={remove}>-</button>
      <h3>{count}</h3>
      <button onClick={add}>+</button>
    </div>
  );
};
export default Counter;