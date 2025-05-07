import { useMemo, useState } from "react";

function UseMemo() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Input />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter {counter}
      </button>
    </div>
  );
}

function Input() {
  const [inputValue, setInputValue] = useState(0);

  const sum = useMemo(() => {
    console.log("memo")
    let finalCount = 0;
    for (let i = 0; i <= inputValue; i++) {
      finalCount += i;
    }
    return finalCount;
  }, [inputValue]);

  return (
    <div>
      <input
        type="number"
        placeholder="Enter a Number"
        onChange={(e) => {
          setInputValue(Number(e.target.value));
        }}
      />
      <p>The sum is {sum}</p>
    </div>
  );
}

export default UseMemo;
