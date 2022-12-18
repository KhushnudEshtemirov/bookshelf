import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
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
import VpnKeyIcon from "@mui/icons-material/VpnKey";

import "./sign-in.scss";

const SignIn = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("email", email);
    myHeaders.append("secret", password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://no23.lavina.tech/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
          <VpnKeyIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl variant="outlined" fullWidth sx={{ mt: 3 }}>
            <InputLabel htmlFor="outlined-adornment-password2">
              Password *
            </InputLabel>
            <OutlinedInput
              onChange={(e) => setPassword(e.target.value)}
              required
              id="outlined-adornment-password2"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 4, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignIn;
