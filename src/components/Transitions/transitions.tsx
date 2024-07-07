import { useState, useTransition } from "react";

export const Transitions = () => {
  const [showCounter, setShowCounter] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const [isPending, startTransition] = useTransition();

  const increaseCounter = () => {
    startTransition(() => {
      setTimeout(() => {
        setShowCounter((prev) => !prev);
      }, 1000);
    });
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={() => increaseCounter()}>Click</button>
      {isPending && <span>Loading...</span>}
      <br />
      {showCounter && <span>{count}</span>}
    </div>
  );
};
