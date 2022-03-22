// import Model from "../../components/Model";
import Model from "../../components/Model";
import Box from "@mui/material/Box";
import * as React from "react";
import {useRef, useState} from "react";
import {Button, Container, Paper} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Typography from "@mui/material/Typography";
import SelectVariants from "../../components/SelectVariants";
import ImgMediaCard from '../../components/ImgMediaCard';
import ListItem from '@mui/material/ListItem';
import { FixedSizeList } from 'react-window';

const model_paths = ['models/moxing/charge/', 'models/moxing/dianziping/', 'models/moxing/flower/', 'models/moxing/gonggaolan/', 'models/moxing/grass/', 'models/moxing/greenwall/', 'models/moxing/guizi1/', 'models/moxing/guizi2/', 'models/moxing/guizi3/', 'models/moxing/guizi4/', 'models/moxing/lighwall/', 'models/moxing/streetlight/', 'models/moxing/streetlight2/', 'models/moxing/streetlight3/', 'models/moxing/streetlight4/', 'models/moxing/streeylight5/', 'models/moxing/yiliaoboz/', 'models/moxing/zhanban1/'];
const model_names = ['167', 'info+kiosk+with+55+inch+horizontal+touch+screen+panel', 'Sem+nome', '263xcl', 'grass', 'Plant+wall (1)', 'book+chest', 'Kids+toys', 'Wooden+bookcase+decor', 'cp_sport_1950_1200_500_2015_08_22', 'plant+wall+pannel', 'Antique+Lamp', 'Lamp-Flowers', 'street+lamps', 'street+lamps', 'street+lamps', 'yiliaobox', 'bulletin+board (1)']
const pic_urls = ['images\\xuanran\\3色草坪.png', 'images\\xuanran\\guizi2.png', 'images\\xuanran\\light1.png', 'images\\xuanran\\light2.png', 'images\\xuanran\\light2发光.png', 'images\\xuanran\\light3发光.png', 'images\\xuanran\\light4.png', 'images\\xuanran\\light4发光.png', 'images\\xuanran\\light5.png', 'images\\xuanran\\light5发光.png', 'images\\xuanran\\lihgt3.png', 'images\\xuanran\\充电桩.png', 'images\\xuanran\\公告栏.png', 'images\\xuanran\\公告栏整体.png', 'images\\xuanran\\医疗箱.png', 'images\\xuanran\\展板1.png', 'images\\xuanran\\柜子1.png', 'images\\xuanran\\柜子3.png', 'images\\xuanran\\柜子4.png', 'images\\xuanran\\灯墙.png', 'images\\xuanran\\灯墙白.png', 'images\\xuanran\\电子屏.png', 'images\\xuanran\\绿化墙.png', 'images\\xuanran\\绿化花1m1m.png']
const money=[50, 80, 110, 140, 170, 200, 230, 260, 290, 320, 350, 380, 410, 440, 470, 500];

/**
 * 发布项目
 * @param props 把props当中的模型信息传递过去
 * @returns {JSX.Element}
 * @constructor
 */
function PublishProject(props) {
  function renderRow(props) {
    const { index, style } = props;
    return (
        <ListItem style={style} key={index} component="div" disablePadding>
          <ImgMediaCard addModel={addModel} pic_url={pic_urls[index]} model_path={model_paths[index]} model_name={model_names[index]} money={money[index]}/>
        </ListItem>
    );
  }
  // const [model_path, setPath] = useState('');
  // const [model_name, setName] = useState('');
  const [price, setPrice] = useState(0)
  const _ref = useRef()
  /**
   * 加入模型，需要加入并且增加模型的价钱
   * @param model_path
   * @param model_name
   * @param money
   */
  const addModel = (model_path, model_name, money) => {
    _ref.current.addModel(model_path, model_name);
    setPrice(price+money)
  }
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
                  maxWidth: 700,
                  maxHeight: 900,
                },
              }}
          >
            <Paper id={"model-paper"} elevation={3} sx={{borderRadius: 5}}>
              <Box id={"model-box"} sx={{display: 'flex', alignItems: 'flex-end', padding: '15px 70px'}}>
                <ModeEditIcon sx={{color: 'action.active', mr: 1, my: 0.5, display: 'flex'}}/>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{mr: 2, display: 'flex'}}
                >
                  模型编辑器
                </Typography>
                <SelectVariants minWidth={240}/>
                <Button variant="contained" size="large" sx={{margin: '0 0 10px 10px', display: 'flex'}}>保存</Button>
              </Box>
              <Model ref1={_ref} {...props}/>
            </Paper>
            <Paper elevation={3} sx={{borderRadius: 5}}>
              <Box id={"model-lib"} sx={{display: 'flex', alignItems: 'flex-end', padding: '15px 20px'}}>
                <SelectVariants minWidth={160}/>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{mr: 2, display: 'flex'}}
                >
                  模型库
                </Typography>
              </Box>
              <Container sx={{overflow: 'hidden'}}>
                <Box
                    sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
                >
                  <FixedSizeList
                      height={400}
                      width={360}
                      itemSize={390}
                      itemCount={model_paths.length}
                      overscanCount={5}
                  >
                    {renderRow}
                  </FixedSizeList>
                </Box>
              </Container>
              <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{mr: 2, display: 'flex', margin: '5px 10px'}}
              >
                总造价: {price}RMB
                <Button variant={"outlined"} size={"medium"}
                        style={{color: '#8d6e63', border: '1px solid #8d6e63', marginLeft: 100}}>置入</Button>
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>)
}

export default PublishProject;
