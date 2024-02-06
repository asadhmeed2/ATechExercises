import React, { useEffect, useState } from "react";

export function Ex1() {
  const [time, setTime] = useState(new Date());

  const handleTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const newIntervalId = setInterval(handleTime, 1000);

    return () => {
      clearInterval(newIntervalId);
    };
  }, []);

  return (
    <div>{`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}</div>
  );
}
