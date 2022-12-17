import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import { book_data } from "../homepage/books.data";

import "./all-book.scss";

const AllBook = () => {
  let [item, improveItem] = useState(8);
  let numberOfBooks = book_data.length;

  const showMore = () => {
    item <= numberOfBooks
      ? improveItem(item + 4)
      : alert("These are all the books in the library for now!!!");
  };

  return (
    <div className="all-book">
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h4" align="center" color="textPrimary">
              All Books
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
            >
              You can find here a book which you want, and you can read it
              without purchase. Good reading!!!
            </Typography>
          </Container>
          <Container maxWidth="xl" className="margin-top">
            <Grid container spacing={4}>
              {book_data.slice(0, item).map((book) => (
                <Grid
                  key={book.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  className="card-container"
                >
                  <Card>
                    <div className="image-container">
                      <CardMedia component="img" image={book.imgUrl} />
                    </div>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Book Name
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Read</Button>
                      <Button size="small">Share</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <div className="show-more">
              <Button variant="contained" onClick={showMore}>
                SHOW MORE
              </Button>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
};

export default AllBook;
