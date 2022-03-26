// import Model from "../../components/Model";
import Model from "../../components/Model";
import Box from "@mui/material/Box";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {Button, Container, Paper} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Typography from "@mui/material/Typography";
import SelectVariants from "../../components/SelectVariants";
import ImgMediaCard from '../../components/ImgMediaCard';
import ListItem from '@mui/material/ListItem';
import {FixedSizeList} from 'react-window';
import {FixedSizeGrid as Grid} from 'react-window';
import CardList from "../../components/CardList";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import model_data from './model_info.json'
console.log(model_data.model_data)

const labels = ['公告栏和展板', '功能类', '绿化类']


// 使用myClassName+model_paths[index]可以获得model_path, 结合model_names[index]可以获取model object
// 使用imgBaseUrl + picturls[index]可以获取图片路径

const myModels = model_data.model_data

/**
 * 发布项目
 * @param props 把props当中的模型信息传递过去
 * @returns {JSX.Element}
 * @constructor
 */
function PublishProject(props) {


  /**
   * 设置分类标签
   */
  const [myLabel, setLabel] = React.useState('公告栏和展板');
  /**
   * 修改分类
   * @param event
   */
  const handleChangeModels = (event) => {
    setLabel(event.target.value);
  };

  /**
   * 渲染模型库当中的模型列表
   * @param props
   * @returns {JSX.Element}
   */
  function renderRow(props) {
    //这个函数是可以拿到当前myClass当前的内容并进行渲染，但是它不知道自己需要渲染什么颜色，但是我们传入的实际上就是有props index内容，因此需要使用
    const {index, style} = props;
    return (
        <ListItem style={style} key={index} component="div" disablePadding>
          <ImgMediaCard
              myClassName={myClass.myClassName}
              imgBaseUrl={myClass.imgBaseUrl}
              // 注意下面的这个model几种颜色的model放到一起
              model={myClass.models[index]}
              addModel={addModel}
          />
        </ListItem>
    );
  }

  // const [model_path, setPath] = useState('');
  // const [model_name, setName] = useState('');
  const [price, setPrice] = useState(0)
  /**
   * 第一个Ref是用来获取Model组件当中的函数
   * @type {React.MutableRefObject<undefined>}
   * @private
   */
  const _ref = useRef()
  // /**
  //  * 第二个Ref是用来获取模型库label组件的
  //  * @type {React.MutableRefObject<undefined>}
  //  * @private
  //  */
  // const _ref2=useRef()
  //
  //
  // /**
  //  * 第三个useRef用来获取项目分类组件的
  //  * @type {React.MutableRefObject<undefined>}
  //  * @private
  //  */
  // const _ref3 = useRef()
  /**
   * 加入模型，需要加入并且增加模型的价钱
   * @param model_path
   * @param model_name
   * @param money
   */
  const addModel = (model_path, model_name, money) => {
    _ref.current.addModel(model_path, model_name);
    setPrice(price + money)
  }

  const getIndex = (label) => {
    for (let i = 0; i < labels.length; i++) {
      if (labels[i] === label) {
        return (i)
      }
    }
    return -1
  }
  const [myClass, setClass] = useState(myModels[0])
  useEffect(() => {
    setClass(myModels[getIndex(myLabel)]);
    // console.log(getIndex(myLabel))
  }, [myLabel])

  return (
      <Box sx={{flexGrow: 1, display: 'flex', marginTop: 3}}>
        <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                // width:650,
                // height:650,
                maxWidth: 900,
                maxHeight: 900,
              },
            }}
        >
          <Paper id={"model-paper"} elevation={3} sx={{borderRadius: 5}}>
            <Container>
              <Box id={"model-box"} sx={{display: 'flex', alignItems: 'flex-end', padding: '0 160px 10px 160px'}}>
                <ModeEditIcon sx={{color: 'action.active', mr: 1, my: 0.5, display: 'flex'}}/>
                <Typography
                    variant="h5"
                    // noWrap
                    component="div"
                    sx={{mr: 2, display: 'flex'}}
                >
                  模型编辑器
                </Typography>
                <SelectVariants labels={['项目一', '项目二']} minWidth={130}/>
                <Button variant="contained" size="large" sx={{margin: '0 0 10px 10px', display: 'flex'}}>保存</Button>
              </Box>
              <Model ref1={_ref} model_path={"scenes/changjing/"} model_name={"666"}/>
            </Container>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{mr: 2, display: 'flex', margin: '15px 10px'}}
            >
              当前选中模型为:
              <Button variant={"outlined"} size={"medium"}
                      style={{color: '#8d6e63', border: '1px solid #8d6e63', marginLeft: 200}}>删除</Button>
            </Typography>
          </Paper>
          <Paper elevation={3} sx={{borderRadius: 5}}>
            <Box id={"model-lib"} sx={{display: 'flex', alignItems: 'flex-end', padding: '15px 20px'}}>
              <FormControl variant="standard" sx={{m: 1, minWidth: 160}}>
                <InputLabel id="simple-select-standard-label">分类</InputLabel>
                <Select
                    labelId="simple-select-standard-label"
                    id="simple-select-standard"
                    value={myLabel}
                    onChange={handleChangeModels}
                    label="项目"
                >
                  {labels.map((label) => (<MenuItem key={label} value={label}>{label}</MenuItem>))}
                </Select>
              </FormControl>
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
                  sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
              >
                {/*这个渲染的应该是每一个大类中的模型*/}
                <FixedSizeList
                    height={560}
                    width={360}
                    itemSize={390}
                    // 渲染的应该是模型，每个模型再去选颜色
                    itemCount={myClass.models.length}
                    overscanCount={5}
                >
                  {renderRow}
                </FixedSizeList>
                {/*<CardList/>*/}
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
      </Box>)
}

export default PublishProject;
