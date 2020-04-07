import React, { Component } from 'react';
import { auth, googleAuthProvider } from './firebase';
import { Button, Icon, PageHeader } from 'antd';

class SignIn extends Component {
  render() {
    return (
      <div className='SignIn'>
        <PageHeader
          title="Lunch Rush"
          extra={[
            <Button type="danger" size="large" onClick={() => auth.signInWithPopup(googleAuthProvider)}>
              <Icon type="google" />Sign In With Google
            </Button>
          ]}
        >
        </PageHeader>
      </div>
    );
  }
}

export default SignIn;
