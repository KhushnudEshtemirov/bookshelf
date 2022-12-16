import React from "react";
import { Link } from "react-router-dom";

import "./homepage.scss";

const Homepage = () => (
  <div className="homepage">
    <Link to="/all-book">All Books</Link>
  </div>
);

export default Homepage;
