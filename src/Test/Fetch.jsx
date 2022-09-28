import React, { useEffect, useState } from "react";

export const Fetch = () => {
  const [actividad, setActividad] = useState({});
  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then((res) => res.json())
      .then((json) => {
        setActividad(json);
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("FINAL"));
  }, []);
  return <div>{JSON.stringify(actividad)}</div>;
};
