import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import ImgMediaCard from "./ImgMediaCard";

function renderRow(props) {
  const { index, style } = props;

  return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ImgMediaCard/>
      </ListItem>
  );
}

export default function CardList() {
  return (
      <Box
          sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
      >
        <FixedSizeList
            height={400}
            width={360}
            itemSize={400}
            itemCount={5}
            overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
  );
}
