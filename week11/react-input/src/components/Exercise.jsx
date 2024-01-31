import { useState } from "react";

const Exercise1 = () => {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleChange = (event, property) => {
    setPerson({ ...person, [property]: event.target.value });
  };

  const onClick = () => {
    if (person.name && person.age) {
      alert(`Come in ${person.name}, you'r ${person.age} - that's good enough`);
    } else {
      alert(`Error name or age is not entered`);
    }
  };
  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => handleChange(e, "name")}
        value={person.name}
      />
      <input
        id="age-input"
        onChange={(e) => handleChange(e, "age")}
        value={person.age}
      />
      <button onClick={onClick}>Go to Bar</button>
    </div>
  );
};
export default Exercise1;
