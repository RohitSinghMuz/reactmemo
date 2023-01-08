import React, { memo } from "react";

const Child = (props) => {
  let getcityname = props.cityname;
  console.log(getcityname, "getcityname");
  return (
    <>
      <h2>{getcityname}</h2>
    </>
  );
};

export default memo(Child);
