import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loading() {
  return <CircularProgress style={{ margin: "auto", display: "block" }} />;
}
