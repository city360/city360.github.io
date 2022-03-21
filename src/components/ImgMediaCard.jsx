import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import OutlineButton from '../components/OutlineButton'
import Typography from '@mui/material/Typography';

/**
 * 渲染一张卡片，链接可以跳转到相应的模型
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function ImgMediaCard(props) {
  return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={props.pic_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <OutlineButton>详情</OutlineButton>
        </CardActions>
      </Card>
  );
}
