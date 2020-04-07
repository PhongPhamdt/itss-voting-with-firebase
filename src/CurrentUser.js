import React, { PropTypes } from 'react';
import { auth } from './firebase';
import './CurrentUser.css';
import { Button, PageHeader } from 'antd';

const CurrentUser = ({ user }) => {
  return (
    <PageHeader
      className="CurrentUser"
      title="Lunch Rush"
      extra={[
        <Button type="danger" onClick={() => auth.signOut()}>Sign Out</Button>
      ]}
      avatar={{ src: user.photoURL }}
      subTitle={user.displayName + "\n" + user.email}
    >
    </PageHeader>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};

export default CurrentUser;
