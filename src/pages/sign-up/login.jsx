import React from "react";
import { Container, Grid } from "@mui/material";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./login.scss";

const LoginPage = () => (
  <Container maxWidth="xl" className="login-page" sx={{ pt: 6, pb: 6 }}>
    <Grid container spacing={4}>
      <SignIn />
      <SignUp />
    </Grid>
  </Container>
);

export default LoginPage;
