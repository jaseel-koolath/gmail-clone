import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png'
          alt=''
        />
        <div>
          <h2>Secure, smart,</h2>
          <h2> and easy to use email</h2>
        </div>

        <p>
          Get more done with Gmail. Now integrated with Google Chat, Google
          Meet, and more, all in one place.
        </p>

        <Button
          onClick={signIn}
          className='login__button'
          variant='contained'
          color='primary'
        >
          Login
        </Button>
      </div>
      <img
        src='https://lh3.googleusercontent.com/PWXM4hp9lRRezHTV86SqLwhRQMz4_Lk08jll3GkWBvBZy_Uk6kvUvwIrVilwaIW2mHZJoccchG6o9a5UdOJEwQPf9oJGmOGSglo3VW0=rw-e365-w2880'
        alt=''
      />
    </div>
  );
}

export default Login;
