//9.Implement a responsive sidebar navigation using Material-UI's Drawer component.
// Include links that allow users to navigate between different sections of your web app.

  import * as React from 'react';
  import Box from '@mui/material/Box';
  import Drawer from '@mui/material/Drawer';
  import Button from '@mui/material/Button';
  import List from '@mui/material/List';
  import Divider from '@mui/material/Divider';
  import ListItem from '@mui/material/ListItem';
  import ListItemButton from '@mui/material/ListItemButton';
  import ListItemIcon from '@mui/material/ListItemIcon';
  import ListItemText from '@mui/material/ListItemText';
  import InboxIcon from '@mui/icons-material/MoveToInbox';
  import MailIcon from '@mui/icons-material/Mail';
  import { useState } from 'react';
  import { Link } from 'react-router-dom'; // Import Link from React Router

  function TemporaryDrawer() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              {/* Wrap each ListItemButton with Link component */}
              <Link to={`/${text.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              {/* Wrap each ListItemButton with Link component */}
              <Link to={`/${text.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (
      <div>
        <Button onClick={toggleDrawer(true)}>Open drawer</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    );
  }
  export default TemporaryDrawer;
