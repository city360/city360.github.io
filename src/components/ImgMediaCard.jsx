import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import OutlineButton from '../components/OutlineButton'
import Typography from '@mui/material/Typography';
import FilledButton from "./FilledButton";
import {Button} from "@mui/material";
import BasicTabs from "./BasicTabs";
import DialogSelect from "./DialogSelect";
import AlertDialogSlide from "./AlertDialogSlide";
import {useRef} from "react";


/**
 * 渲染一张卡片，链接可以跳转到相应的模型
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function ImgMediaCard(props) {
  const [open, setOpen] = React.useState(false)
  /**
   * 通过useRef获取到Dialog的点击事件
   * @type {React.MutableRefObject<undefined>}
   * @private
   */
  const _ref = useRef()
  const openDialog = ()=>{
    _ref.current.handleClickOpen();
  }
  // console.log(props)
  /**
   * 增加模型，通过父组件的addModel来调用兄弟组件的函数
   * @param model_path
   * @param model_name
   * @param money
   */
  const addModel=(model_path,model_name,money)=>{
    props.addModel(model_path,model_name,money);
  }
  return (
      <Card sx={{ maxWidth: 345 }}>
        {/*<BasicTabs/>*/}
        <DialogSelect/>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={props.pic_url}
        >
          {/*测试*/}
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.pic_url.split('.')[0]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <OutlineButton onClick={()=>{
            openDialog()
          }}>详情</OutlineButton>
          <Button onClick={()=>{addModel(props.model_path,props.model_name,props.money)}} variant={"contained"} size={"large"} style={{margin:'0 20px'}}>
            置入
          </Button>
          <AlertDialogSlide content={props.content} ref1={_ref} open={open}/>
        </CardActions>
      </Card>
  );
}
