import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MyCards from "./MyCards";
import ReactCompareImage from "react-compare-image";
import {Container, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";
import {useRef} from "react";

export default function ViewProject() {

  const _ref=useRef()

  return (
      <div>
        <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 5,
                width: 500,
                height: 450,
              },
              marginTop:'80px'
            }}
        >
          {/*图片对比*/}
          <Paper elevation={0} style={{margin:'0 auto'}}>
            <Scene1 model_path={"scenes/changjing/"} model_name={"666"} sceneID={"scene1"}/>
          </Paper>

          {/*文字说明*/}
          <Paper elevation={0} style={{margin:'0 auto'}}>
            <Container sx={{margin:'5px auto'}}>
              <Typography marginBottom={2} variant="h5" component="div" sx={{textAlign: 'center'}}>
                延吉社区活动房场景
              </Typography>
              <Typography sx={{mb: 1.5, margin: '10px 10px',lineHeight:3}} color="text.secondary">
                一些介绍
              </Typography>
            </Container>
          </Paper>
        </Box>
        <Divider/>
        <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 5,
                width: 500,
                height: 450,
              },
              marginTop:'80px'
            }}
        >
          {/*图片对比*/}
          <Paper elevation={0} style={{margin:'0 auto'}}>
            <Scene2 model_path={"/scenes/child/"} model_name={"666"} sceneID={"scene1"}/>
          </Paper>

          {/*文字说明*/}
          <Paper elevation={0} style={{margin:'0 auto'}}>
            <Container sx={{margin:'5px auto'}}>
              <Typography marginBottom={2} variant="h5" component="div" sx={{textAlign: 'center'}}>
                延吉社区儿童活动场景
              </Typography>
              <Typography sx={{mb: 1.5, margin: '10px 10px',lineHeight:3}} color="text.secondary">
                一些介绍
              </Typography>
            </Container>
          </Paper>
        </Box>
      </div>
  );
}
