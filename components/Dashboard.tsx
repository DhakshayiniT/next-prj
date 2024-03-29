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
import SubList from '../components/SubList'

interface Board {
  id: number;
  name: string;
  createdAt: string;
  bcfs: BCF[];
}

interface BCF {
  id: number;
  name: string;
  createdAt: string;
  bcfBoards: BCFBoard[];
}

interface BCFBoard {
  id: number;
  name: string;
  createdAt: string;
}

interface Prompt {
  name: string;
  id: number;
  createdAt: string;
}

interface Props {
  boards: Board[];
  prompts: Prompt[];
}

const Dashboard: React.FC<Props> = ({ boards, prompts}) => {
  const drawerWidth = 240;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  const drawer = (
    <div>
        <Toolbar sx={{background:"#565353"}}>
          <Typography variant="h6" noWrap component="div" sx={{color:"#fff",fontSize:"2rem"}}>
            Boards
          </Typography>
        </Toolbar>
        <List>
          {boards.map(board => (
            <div key={board.id}>
              <SubList board={board}/>
            </div>
          ))}
        </List>

    </div>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{background:"#565353"}}/>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={true}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { border:0, width: drawerWidth,backgroundColor:"#6e6c6c" },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { border:0, width: drawerWidth,backgroundColor:"#6e6c6c" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
        Prompts
      </Typography>
      <Grid container spacing={3}>
        {prompts.map(prompt => (
          <Grid item key={prompt.id} xs={12} sm={6} md={4} sx={{padding:"28px"}}>
            <Card>
              <CardContent>
                <Typography variant="h6">{prompt.name}</Typography>
                <Typography variant="body2" color="textSecondary">{`Created at: ${prompt.createdAt}`}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      </Box>
    </Box>
  );
}

export default Dashboard