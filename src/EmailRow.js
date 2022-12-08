import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailRow.css';

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/mail')} className='emailRow'>
      <div className='emailRow__options'>
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className='emailRow__title'>{title}</h3>
      <div className='emailRow__message'>
        <h4>
          {`${subject}\t`}
          <span className='emailRow__description'>- {description}</span>
        </h4>
      </div>
      <div className='emailRow__time'>{time}</div>
    </div>
  );
}

export default EmailRow;
