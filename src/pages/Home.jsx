import * as React from 'react';
import {Box, Button, Container} from "@mui/material";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Login from "../components/Login";

const strs = ["快速发布、准确定位。\n",
  "个性化定制，模块化定制。\n",
  "专家认证畸零空间设计导则。\n",
  "全透明公开供给方双向选择。\n",
  "超过30个知名专业设计师工作室入驻。\n",
  "超过10个街道政府达成初步合作意向。\n",
  "多种多样产品及服务可供遴选。\n"];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <div style={{backgroundImage: `url(${"img/img.png"})`, height: '600px', overflow: 'hidden'}}>
            <Typography sx={{mt: 6, margin: '120px auto 20px', fontSize: '80px', textAlign: 'center'}} color="#8d6e63">
              城市360
            </Typography>
            <Typography sx={{mb: 1.5, margin: '10px 10px', fontSize: '30px', textAlign: 'center'}} color="#8d6e63">
              提供畸零空间活化全流程服务
            </Typography>
            <Typography sx={{mb: 1.5, margin: '30px 10px', fontSize: '30px', textAlign: 'center'}} color="#8d6e63">
              <Button variant={"contained"} size={"large"} style={{margin:'0 20px'}}>查看已发布的项目</Button>
              <Button variant={"outlined"} size={"large"} style={{color:'#8d6e63', border:'1px solid #8d6e63'}}>发布新的项目</Button>
            </Typography>

          </div>
          <Container>
            <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 5,
                    width: 300,
                    height: 260,
                  },
                  marginTop:'40px'
                }}
            >
              {/*是什么*/}
              <Paper elevation={0} style={{margin:'0 auto'}}>
                <GroupIcon
                    sx={{
                      textAlign: 'center',
                      display: 'block',
                      margin: '10px auto',
                      fontSize: '45px',
                      color: '#8d6e63'
                    }}/>
                <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>
                  “城市360”是什么？
                </Typography>
                <Typography sx={{mb: 1.5, margin: '10px 10px', lineHeight: '30px'}} color="text.secondary">
                  城市空间中，楼与楼之间、社区与社区之间，不同的形式种类作用的建筑群中间会不可避免地产生一些空间上的浪费。城市空间结构中相对不规则、零散的、细碎的、畸形的空间，被称为畸零空间。
                </Typography>
              </Paper>

              {/*价值*/}
              <Paper elevation={0} style={{margin:'0 auto'}}>
                <SettingsIcon
                    sx={{
                      textAlign: 'center',
                      display: 'block',
                      margin: '10px auto',
                      fontSize: '45px',
                      color: '#8d6e63'
                    }}/>
                <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>
                  “城市360”之价值？
                </Typography>
                <Typography sx={{mb: 1.5, margin: '10px 10px'}} color="text.secondary">
                  助力政府管理：城市空间智慧管理，化“被动管理”为“主动服务”。
                </Typography>
                <Typography sx={{mb: 1.5, margin: '10px 10px'}} color="text.secondary">
                  唤醒社会认知：“互联网+更新”模式多键互联，加强人文体验。
                </Typography>
                <Typography sx={{mb: 1.5, margin: '10px 10px'}} color="text.secondary">
                  推进产教结合：“互联网+公益”理念整合资源，提供公益平台。
                </Typography>
              </Paper>

              {/*优势*/}
              <Paper elevation={0} style={{margin:'0 auto'}}>
                <FmdGoodIcon
                    sx={{
                      textAlign: 'center',
                      display: 'block',
                      margin: '10px auto',
                      fontSize: '45px',
                      color: '#8d6e63'
                    }}/>
                <Typography variant="h5" component="div" sx={{textAlign: 'center', margin: '5px'}}>
                  “城市360”的优势？
                </Typography>
                {strs.map(str => (<Typography key={str} sx={{lineHeight: '30px'}} color="text.secondary">
                  {str}
                </Typography>))}
              </Paper>
            </Box>
          </Container>
          <Login/>
        </div>

    )
  }

  componentDidMount() {
  }
}
