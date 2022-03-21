import {useEffect, useState} from "react";
import {Button, Typography,Container} from "@mui/material";
import {Test} from "./Test";

function ViewProject(props) {
  const [a,setA] = useState(1)
  const [info,setInfo] = useState('尚未')
  useEffect(()=>{
    setInfo(`这是一个测试，按动button${a}次了`)
  })
  return (<Container>
    <div>
      hhh
    </div>
    <div>
      hhh
    </div>
    <div>
      hhh
    </div>
    <div>
      hhh
    </div>
    <Button onClick={()=>setA(a+1)}>
      点击进行设置a
    </Button>
    <Typography>
      {info}
    </Typography>
    <Test a={a}/>
  </Container>)
}
export default ViewProject;
