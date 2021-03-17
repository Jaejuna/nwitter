import React from 'react';
import { authService } from '../firebase';
import { useHistory } from 'react-router';

export default () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.pushState("/");
  }
  return (
  <>  
    <button onClick = {onLogOutClick} >Log out </button> 
  </>
  );
}