import React, {useEffect} from 'react';

import Header from "./Components/Header";
import Home from "./Components/Home";
import Model from "./Components/Model";

import {onAuthStateChanged} from "@firebase/auth";
import {auth} from './firebase';
import {useDispatch} from 'react-redux';
import {setLogIn, setLogOut} from './features/User/userSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setLogIn({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
          })
        );
      } else {
        dispatch(setLogOut({name: null, email: null, photo: null}))
      }
    })
  })



  return (
    <div className="App" >
        <Header />
        <Home />
        <Model />
    </div>
  );
}

export default App;
