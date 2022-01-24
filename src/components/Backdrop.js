import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = ({ onClick }) => (
  <div className={classes.backdrop} onClick={onClick} />
);

export default Backdrop;
