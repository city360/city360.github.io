import * as React from 'react';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import {Container, Grid, Paper} from "@mui/material";

const outlinedCard = (
    <Container fixed>
      {/*<Box component="p" sx={{ p: 2, border: '1px dashed grey', margin:'0 auto' }}>*/}
        {/*<SupervisorAccountRoundedIcon sx={{fontSize:'50px',left:'50%',ml:' -(half of width of image)px',top:'50%',mt: '-(half of height of image)px'}}/>*/}
      {/*  <SupervisorAccountRoundedIcon sx={{fontSize:'50px',display:'flex'}}/>*/}
      {/*</Box>*/}
      <CardContent>
        <Typography variant="h5" component="div" sx={{textAlign:'center'}}>
          “城市360”是什么？
        </Typography>
        <Typography sx={{mb: 1.5, margin:'10px 10px'}} color="text.secondary">
          城市空间中，楼与楼之间、社区与社区之间，不同的形式种类作用的建筑群中间会不可避免地产生一些空间上的浪费。城市空间结构中相对不规则、零散的、细碎的、畸形的空间，被称为畸零空间。
        </Typography>
        {/*<Typography variant="body2">*/}
        {/*  well meaning and kindly.*/}
        {/*  <br/>*/}
        {/*  {'"a benevolent smile"'}*/}
        {/*</Typography>*/}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Container>
);

export default function OutlinedCard() {
  return (
      <Box sx={{minWidth: 275}}>
        <Paper elevation={0}>{outlinedCard}</Paper>
      </Box>
  );
}
