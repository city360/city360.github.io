import Model from "../../components/Model";
import Box from "@mui/material/Box";
import * as React from "react";
import {Button, Container, Paper} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Typography from "@mui/material/Typography";
import SelectVariants from "../../components/SelectVariants";
import CardList from "../../components/CardList";

/**
 * 发布项目
 * @param props 把props当中的模型信息传递过去
 * @returns {JSX.Element}
 * @constructor
 */
function PublishProject(props) {
  return (
      <Box sx={{flexGrow: 1, display: 'flex'}}>
        {/*<Box sx={{flexGrow: 1, display: 'flex', marginTop:10}}>*/}
        <Container>
          <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  maxWidth:700,
                  maxHeight:900,
                },
              }}
          >
            <Paper id={"model-paper"} elevation={3} sx={{borderRadius:5}} >
              <Box id={"model-box"} sx={{ display: 'flex', alignItems: 'flex-end' ,padding:'15px 70px'}}>
                <ModeEditIcon sx={{ color: 'action.active', mr: 1, my: 0.5 , display:'flex'}} />
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{mr: 2, display:'flex'}}
                >
                  模型编辑器
                </Typography>
                <SelectVariants minWidth={240}/>
                <Button variant="contained" size="large" sx={{margin:'0 0 10px 10px', display:'flex'}}>保存</Button>
              </Box>
              <Model {...props}/>
            </Paper>
            <Paper elevation={3} sx={{borderRadius:5}}>
              <Box id={"model-lib"} sx={{ display: 'flex', alignItems: 'flex-end' ,padding:'15px 20px'}}>
                <SelectVariants minWidth={160}/>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{mr: 2, display:'flex'}}
                >
                  模型库
                </Typography>
              </Box>
              <Container sx={{overflow:'hidden'}}>
                <CardList/>
              </Container>
              <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{mr: 2, display:'flex',margin:'5px 10px'}}
              >
                总造价: 2000rmb
                <Button variant={"outlined"} size={"medium"} style={{color:'#8d6e63', border:'1px solid #8d6e63', marginLeft:100}}>置入</Button>
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>)
}

export default PublishProject;
