import React, { PropTypes } from 'react';
import { auth } from './firebase';
import './CurrentUser.css';
import { Card, Button, Avatar, Tag } from 'antd';

const CurrentUser = ({ user }) => {
  return (
    <Card
      className="CurrentUser"
      cover={
        <Avatar
          size={160}
          shape="square"
          src={user.photoURL}
          alt={user.displayName}
        />
      }
    >
      <div className="CurrentUser--identification">
        <h3>{user.displayName}</h3>
        <Tag style={{display: 'block', marginBottom: 15}}>{user.email}</Tag>
        <Button type="danger" onClick={() => auth.signOut()}>
          Sign Out
        </Button>
      </div>
    </Card>
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
