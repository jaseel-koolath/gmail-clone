import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { selectsendMessageIsOpen } from './features/mailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { login } from './features/userSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((usr) => {
      if (usr) {
        dispatch(
          login({
            displayName: usr.displayName,
            email: usr.email,
            photoUrl: usr.photoURL,
          })
        );
      } else {
      }
    });
    return () => {};
  }, [dispatch]);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className='app'>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Routes>
              <Route path='/mail' element={<Mail />} />
              <Route exact path='/' element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
