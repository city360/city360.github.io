import {Button} from "@mui/material";
import * as React from "react";

export default function FilledButton(props) {
  return(
      <Button variant={"contained"} size={"large"} style={{margin:'0 20px'}}>{props.children}</Button>
  )
}
