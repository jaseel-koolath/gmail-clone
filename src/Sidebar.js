import { Button, IconButton } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import {
  Inbox,
  StarBorder,
  Create,
  AccessTime,
  LabelImportantOutlined,
  SendOutlined,
  InsertDriveFileOutlined,
  LabelOutlined,
  ExpandMoreOutlined,
  Person,
  Duo,
  Phone,
} from '@mui/icons-material';
import SidebarOption from './SidebarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <Button
        className='sidebar__compose'
        startIcon={<Create fontSize='Large' />}
        onClick={() => dispatch(openSendMessage())}
      >
        compose
      </Button>
      <SidebarOption Icon={Inbox} title='Inbox' number={54} active />
      <SidebarOption Icon={StarBorder} title='Starred' number={null} />
      <SidebarOption Icon={AccessTime} title='Snoozed' number={null} />
      <SidebarOption
        Icon={LabelImportantOutlined}
        title='Important'
        number={null}
      />
      <SidebarOption Icon={SendOutlined} title='Sent' number={null} />
      <SidebarOption
        Icon={InsertDriveFileOutlined}
        title='Drafts'
        number={54}
      />
      <SidebarOption Icon={LabelOutlined} title='Categories' number={null} />
      <SidebarOption Icon={ExpandMoreOutlined} title='More' number={null} />
      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Person />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
