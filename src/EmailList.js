import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  InboxOutlined,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from '@mui/icons-material';
import {
  Checkbox,
  getListItemAvatarUtilityClass,
  IconButton,
} from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './EmailList.css';
import EmailRow from './EmailRow';
import Section from './Section';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

function EmailList() {
  const [emailList, setEmailList] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'emails'), (snapshot) => {
      setEmailList(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);
  console.log(emailList);
  return (
    <div className='emailList'>
      <div className='emailList__settings'>
        <div className='emailList__settingsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className='emailList__settingsRight'>
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className='emailList__sections'>
        <Section Icon={InboxOutlined} title='Primary' color='red' selected />
        <Section Icon={People} title='Socials' color='#1A73E8' />
        <Section Icon={LocalOffer} title='Promotion' color='green' />
      </div>
      <div className='emailList__list'>
        {emailList.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
