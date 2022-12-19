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
  Fab,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

import AddBook from "../../components/add-book/add-book";
import { book_data } from "../homepage/books.data";

import "./all-book.scss";

const AllBook = () => {
  const changeStatus = (e) => {
    e.preventDefault();

    let items = document.getElementsByClassName("status-items");
    let status = document.querySelectorAll(".status");

    items[e.target.id - 1].classList.toggle("show-status");
    if (e.target.innerHTML === "New") {
      status[e.target.id - 1].children[0].classList.value = "new";
      status[e.target.id - 1].children[0].innerHTML = "New";
    }
    if (e.target.innerHTML === "Reading") {
      status[e.target.id - 1].children[0].classList.value = "reading";
      status[e.target.id - 1].children[0].innerHTML = "Reading";
    }
    if (e.target.innerHTML === "Finished") {
      status[e.target.id - 1].children[0].classList.value = "finished";
      status[e.target.id - 1].children[0].innerHTML = "Finished";
    }
  };

  let [item, improveItem] = useState(8);
  let numberOfBooks = book_data.length;

  const showMore = () => {
    item <= numberOfBooks
      ? improveItem(item + 4)
      : alert("These are all the books in the library for now!!!");
  };

  let [books, setResult] = useState(null);

  var myHeaders = new Headers();
  myHeaders.append("Key", "khushnud007");
  myHeaders.append("Sign", "35b6f86048a2ed5ccb98107739abc746");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let [modal, setModal] = useState(false);

  const showModal = () => {
    document.getElementsByClassName("add-icon")[0].classList.toggle("active");
    setModal(!modal);
  };

  const deleteBook = (e) => {
    let delBook = document.getElementsByClassName("card-container");
    if (window.confirm("Are you sure to delete this book?!")) {
      delBook[e.target.id - 1].classList.add("delete");
    }
  };

  useEffect(() => {
    let getBooks = async () => {
      await fetch("https://no23.lavina.tech/books/a", requestOptions)
        .then((response) => response.json())
        .then((result) => setResult(result.data))
        .catch((error) => console.log("error", error));
    };
    getBooks();
  }, []);

  if (!books) return null;

  return (
    <div className="all-book">
      <Fab
        color="primary"
        aria-label="add"
        className="add-icon"
        title="Add New Book"
        onClick={showModal}
      >
        <AddIcon />
      </Fab>
      <div className={`modal-window ${modal ? "show-modal" : ""}`}>
        <AddBook />
      </div>
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
                  <Card className="card-body">
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          <img
                            src={book.author}
                            alt="avatar"
                            width="100%"
                            height="100%"
                          />
                        </Avatar>
                      }
                      action={
                        <IconButton
                          aria-label="settings"
                          title="Change Status"
                          onClick={changeStatus}
                          id={book.id}
                        >
                          <MoreVertIcon id={book.id} />
                          <div className="status-items" id={book.id}>
                            <span id={book.id}>New</span>
                            <span id={book.id}>Reading</span>
                            <span id={book.id}>Finished</span>
                          </div>
                        </IconButton>
                      }
                      title={books[book.id].author}
                      subheader={books[book.id].published + " year"}
                    />
                    <div className="image-container">
                      <CardMedia component="img" image={book.imgUrl} />
                      <div className="status">
                        {book.new ? <span className="new">New</span> : null}
                        {book.reading ? (
                          <span className="reading">Reading</span>
                        ) : null}
                        {book.finished ? (
                          <span className="finished">Finished</span>
                        ) : null}
                      </div>
                    </div>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {books[book.id].title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        position: "relative",
                      }}
                    >
                      <Button size="small">Read</Button>
                      <Button size="small">Share</Button>
                      <IconButton
                        id={book.id}
                        onClick={deleteBook}
                        className="delete-icon"
                      ></IconButton>
                      <DeleteIcon
                        sx={{
                          color: red[500],
                          position: "absolute",
                          right: "20px",
                          bottom: "16px",
                        }}
                      />
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
