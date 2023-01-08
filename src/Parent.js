import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  let mycityname = "Hyderabad";
  const [city, setcity] = useState("");
  const [data, setdata] = useState([]);
  const Adddata = () => {
    const newcity = {
      city,
    };
    setdata([...data, newcity]);
  };
  return (
    <>
      <div style={{ width: "50%", margin: "10px auto" }}>
        <Child cityname={mycityname} />
        <input
          type="text"
          placeholder="Enter CityName"
          onChange={(e) => setcity(e.target.value)}
          style={{ width: "300px", padding: "10px 20px", margin: "10px" }}
        />
        <button
          onClick={Adddata}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "green",
          }}
        >
          Adddata
        </button>

        {data?.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.city}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Parent;
