import { useLayoutEffect, useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count === 5) {
      setCount(0);
    }
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;

/*
--> useEffect()
1. state thay đổi
2. re-render
3. UI update
4. cleanup useEffect
5. callback useEffect

--> useLayoutEffect()
1. state thay đổi
2. re-render
3. cleanup
4. callback
5. UI update
*/
