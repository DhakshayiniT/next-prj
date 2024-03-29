import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Grid, Card, CardContent, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';


const SubList = ({ board })=> {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <div key={board.id}>
      <ListItem button sx={{padding:"24px"}} onClick={handleClick}>
        <ListItemText  primary={<Typography sx={{color:"#fff",fontSize:"20px"}}>{board.name}</Typography>} />
        {open ? <ExpandLess sx={{color:"#fff"}}/> : <ExpandMore sx={{color:"#fff"}}/>}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {board.bcfs.map(bcf => (
            <div key={bcf.id}>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText sx={{color:"#fff"}} primary={bcf.name} />
              </ListItem>
                <List component="div" disablePadding>
                  {bcf.bcfBoards.map(bcfBoard => (
                    <>
                    <Divider />
                    <ListItem key={bcfBoard.id} button sx={{ pl: 8 }}>
                      <ListItemText sx={{color:"#fff"}} primary={bcfBoard.name} />
                    </ListItem>
                    
                    </>
                  ))}
                </List>
            </div>
          ))}
        </List>
        <Divider />
      </Collapse>
    </div>
  );
}

export default SubList