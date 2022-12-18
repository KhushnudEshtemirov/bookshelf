import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

import "./sign-up.scss";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate();

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let time = Date.now();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: firstName + " " + lastName,
      email: email,
      key: time.toString(),
      secret: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://no23.lavina.tech/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        alert("Sign up successfully!");
        navigate("/all-book");
      })
      .catch((error) => alert("Error occurred!"));
  };

  return (
    <Grid item xs={12} sm={10} md={8} lg={6} xl={6}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                required
                fullWidth
                id="email1"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password1">
                  Password *
                </InputLabel>
                <OutlinedInput
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  id="outlined-adornment-password1"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 4, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignUp;
