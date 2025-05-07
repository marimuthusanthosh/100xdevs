import { useMemo, useState } from "react";

function AssignmentWithMemo() {
  const [inputValue, setInputValue] = useState(0);
  const [dummy, setDummy] = useState(0);

  const sum = useMemo(() => {
    console.log("Calculating sum...");
    let count = 0;
    for (let i = 0; i <= inputValue; i++) {
      count += i;
    }
    return count;
  }, [inputValue]);

  return (
    <div style={{ border: "2px solid green", padding: "1rem", margin: "1rem" }}>
      <h2>With useMemo</h2>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <button onClick={() => setDummy(dummy + 1)}>Re-render</button>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default AssignmentWithMemo;
