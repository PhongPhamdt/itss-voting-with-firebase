import React, { Component } from 'react';
import { auth, googleAuthProvider } from './firebase';
import { Button, Icon } from 'antd';

class SignIn extends Component {
  render() {
    return (
      <div className='SignIn'>
        <Button size="large" onClick={() => auth.signInWithPopup(googleAuthProvider)}>
          <Icon type="google" />Click Here To Sign In With Google
        </Button>
      </div>
    );
  }
}

export default SignIn;
