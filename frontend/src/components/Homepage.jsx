import React from "react";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div>
      <h2>To do application</h2>
      <h3>For using the application you have to login first</h3>
      <h3>
        if you dont have account no worry<Link to="signup">signup here</Link>
      </h3>
    </div>
  );
};
