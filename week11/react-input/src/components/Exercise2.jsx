import { useCallback, useEffect, useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  // useEffect(() => {
  // }, [fruit, name]);

  const log = (fruit) => {
    console.log(`${name} selected ${fruit}`);
  };

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select
        id="select-input"
        onChange={(e) => {
          setFruit((_) => {
            return e.target.value;
          });
          log(e.target.value);
        }}
        value={fruit}
      >
        <option value={""}></option>
        <option value={"apple"}>Apple</option>
        <option value={"banana"}>Banana</option>
      </select>
    </div>
  );
};
export default Exercise2;
