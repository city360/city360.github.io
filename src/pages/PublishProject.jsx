import Model from "../components/Model";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {Paper} from "@mui/material";
import {Toolbar} from "@mui/material";
import {Card,CardContent} from "@mui/material";
import {CardActions,CardMedia} from "@mui/material";
import {AppBar, Button, Container} from "@mui/material";
import SearchAppBar from "../components/SearchAppBar";
import SelectVariants from "../components/SelectVariants";

import {lime} from "@mui/material/colors";
import {alpha, styled} from "@mui/material/styles";

const MyButton = styled(Button)(({theme}) => ({
  // position: 'relative',
  float:'right',
  // position:''
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.68),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.86),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(25),
    width: 'auto',
  },
}));

/**
 * 发布项目
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function PublishProject(props) {
  return (
      <Box sx={{flexGrow: 1, display: 'flex'}}>
        <Model {...props}/>
        {/*<Box sx={{flexGrow: 1, display: 'block', margin:'10px 20px'}}>*/}
        {/*  <div>*/}
        {/*    <Box sx={{display: 'flex', alignItems: 'flex-begin', padding: '20px 20px'}}>*/}
        {/*      <ModeEditIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>*/}
        {/*      <Typography*/}
        {/*          variant="h4"*/}
        {/*          noWrap*/}
        {/*          component="div"*/}
        {/*          sx={{mr: 2, display:'flex'}}*/}
        {/*      >*/}
        {/*        模型库*/}
        {/*      </Typography>*/}
        {/*    </Box>*/}
        {/*    <SearchAppBar minWidth={100}/>*/}
        {/*  </div>*/}
        {/*  <Box*/}
        {/*      sx={{*/}
        {/*        // height:'400px',*/}
        {/*        display: 'flex',*/}
        {/*        flexWrap: 'wrap',*/}
        {/*        '& > :not(style)': {*/}
        {/*          m: 1,*/}
        {/*          width: 226,*/}
        {/*          height: 226,*/}
        {/*        },*/}
        {/*      }}*/}
        {/*  >*/}
        {/*    <Card sx={{ maxWidth: 400 }}>*/}
        {/*      <CardMedia*/}
        {/*          component="img"*/}
        {/*          height="128"*/}
        {/*          image="images/cards/contemplative-reptile.jpg"*/}
        {/*          alt="green iguana"*/}
        {/*      />*/}
        {/*      <CardActions>*/}
        {/*        <Button size="small">Share</Button>*/}
        {/*        <Button size="small">Learn More</Button>*/}
        {/*      </CardActions>*/}
        {/*    </Card>*/}
        {/*    <Card sx={{ minWidth: 230 }}>*/}
        {/*      <CardContent>*/}
        {/*        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>*/}
        {/*          Word of the Day*/}
        {/*        </Typography>*/}
        {/*        <Typography variant="h5" component="div">*/}
        {/*          hhh*/}
        {/*        </Typography>*/}
        {/*        <Typography sx={{ mb: 1.5 }} color="text.secondary">*/}
        {/*          adjective*/}
        {/*        </Typography>*/}
        {/*        <Typography variant="body2">*/}
        {/*          well meaning and kindly.*/}
        {/*          <br />*/}
        {/*          {'"a benevolent smile"'}*/}
        {/*        </Typography>*/}
        {/*      </CardContent>*/}
        {/*      <CardActions>*/}
        {/*        <Button size="small">Learn More</Button>*/}
        {/*      </CardActions>*/}
        {/*    </Card>*/}
        {/*  </Box>*/}
        {/*  <AppBar position="static" sx={{height:'60px',borderRadius:'15px',padding:'0 10px'}}>*/}
        {/*    <Toolbar disableGutters>*/}
        {/*      <Typography*/}
        {/*          variant="h6"*/}
        {/*          noWrap*/}
        {/*          component="div"*/}
        {/*          sx={{mr: 2, display:'flex',margin:'0 10px'}}*/}
        {/*      >*/}
        {/*        总造价:*/}
        {/*      </Typography>*/}
        {/*      <Typography*/}
        {/*          variant="h6"*/}
        {/*          noWrap*/}
        {/*          component="div"*/}
        {/*          sx={{mr: 2, display:'flex',margin:'0 10px'}}*/}
        {/*      >*/}
        {/*        2000rmb*/}
        {/*      </Typography>*/}
        {/*      <MyButton>*/}
        {/*        置入*/}
        {/*      </MyButton>*/}
        {/*    </Toolbar>*/}
        {/*  </AppBar>*/}
        {/*</Box>*/}
      </Box>)
}

export default PublishProject;
