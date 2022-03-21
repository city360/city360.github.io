import {Button} from "@mui/material";
import * as React from "react";

/**
 * 边框按钮
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function  OutlineButton(props){
  console.log(props)
  return(
      <Button variant={"outlined"} size={"large"} style={{color:'#8d6e63', border:'1px solid #8d6e63'}}>{props.children}</Button>
  )
}
