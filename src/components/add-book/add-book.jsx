import React, { useState } from "react";
import CryptoJS from "crypto-js";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";

const AddBook = () => {
  let [bookNumber, setBookNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let signstr =
      "POST" +
      "https://no23.lavina.tech/books" +
      '{"isbn":' +
      '"' +
      bookNumber.toString() +
      '"' +
      "}" +
      "xushnud007";
    let sign = CryptoJS.MD5(signstr).toString();

    var myHeaders = new Headers();
    myHeaders.append("Key", "khushnud007");
    myHeaders.append("Sign", sign);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      isbn: bookNumber.toString(),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://no23.lavina.tech/books", requestOptions)
      .then((response) => response.text())
      .then((result) => alert("Book was added successfully!"))
      .catch((error) => alert("Error occured!"));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ m: 1, width: 80, height: 80 }}
          src="https://pngwebicons.com/uploads/book/512/book_icon6795.png"
          alt="add book"
          variant="square"
        />
        <Typography component="h1" variant="h5">
          Add New Book
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            margin="normal"
            required
            fullWidth
            id="bookNumber"
            label="Enter Book's ISBN"
            name="bookNumber"
            autoFocus
            onChange={(e) => setBookNumber(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add to Shelf
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddBook;
