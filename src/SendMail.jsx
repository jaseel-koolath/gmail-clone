import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import { serverTimestamp } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import './SendMail.css';

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    try {
      const docRef = addDoc(collection(db, 'emails'), {
        to: data.to,
        subject: data.subject,
        message: data.message,
        timestamp: serverTimestamp(),
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    dispatch(closeSendMessage());
  };
  const dispatch = useDispatch();
  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <Close
          onClick={() => dispatch(closeSendMessage())}
          className='sendMail__close'
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('to', { required: true })}
          placeholder='To'
          type='email'
        />
        {errors.to && <span>To is required</span>}
        <input
          {...register('subject', { required: true })}
          placeholder='Subject'
          type='text'
        />
        {errors.subject && <span>Subject is required</span>}
        <input
          {...register('message', { required: true })}
          type='text'
          className='sendMail__message'
        />
        {errors.message && <span>Message is required</span>}
        <div className='sendMail__options'>
          <Button className='sendMail__send' type='submit'>
            SEND
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
