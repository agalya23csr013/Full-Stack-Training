import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent email={"agal@gmail.com"} skills={["html","css","js"]} data={{username:"Agal", password:"agal@123"}}/>
      <div>
        <h1>This is Parent Component</h1>
      </div>
    </div>
  );
};

export default ParentComponent;