import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import { book_data } from "./books.data";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./homepage.scss";

const Homepage = () => {
  let [move, changeMove] = useState(0);

  const prevBtn = () => {
    move === 0 ? changeMove(-2) : changeMove(move + 1);
  };

  const nextBtn = () => {
    move < -1 ? changeMove(0) : changeMove(move - 1);
  };

  return (
    <div className="homepage">
      <ArrowBackIosIcon onClick={prevBtn} />
      <ArrowForwardIosIcon onClick={nextBtn} />
      <div className="books-container">
        <div
          className="books"
          style={{ transform: `translateX(${move * 18}%)` }}
        >
          {book_data.slice(0, 18).map((book) => (
            <div className="image" key={book.id}>
              <img src={book.imgUrl} alt="books" />
            </div>
          ))}
        </div>
      </div>
      <Link to="/all-book">
        <Typography variant="h5">View All Books</Typography>
      </Link>
    </div>
  );
};

export default Homepage;
