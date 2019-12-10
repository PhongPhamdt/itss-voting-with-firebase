import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';
import { Card, Button } from 'antd';

class Restaurant extends Component {

  render() {
    const { name, user, votes, handleDeselect, handleSelect } = this.props;
    const userHasSelected = votes && Object.keys(votes).includes(user.uid);
    return (
      <Card 
        className='Restaurant'
        title={name}
        actions={[
          <Button type="primary" onClick={handleSelect} disabled={userHasSelected}> Vote: YES </Button>,
          <Button type="dashed" onClick={handleDeselect} disabled={!userHasSelected}> Vote: NAH </Button>
        ]}
      >
        <p className='Restaurant--count'>
          Votes: {(votes && Object.keys(votes).length || 0)}
        </p>
        <div>
          { votes && map(votes, (vote, key) => <p key={key}>{ vote }</p>) }
        </div>
      </Card>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
