import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';
import { Card, Button, Modal, Tag, Input, Typography, Tooltip } from 'antd';
const { TextArea } = Input;
const { Text } = Typography;
class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { name, user, address, description, votes, handleDeselect, handleSelect } = this.props;
    const userHasSelected = votes && Object.keys(votes).includes(user.uid);
    return (
      <Card
        className='Restaurant'
        title={
          <div>
            <span>{name}</span><br />
            <a onClick={this.showModal}>Details</a>
          </div>
        }
        actions={[
          <Button type="primary" onClick={handleSelect} disabled={userHasSelected}> Vote: YES </Button>,
          <Button type="dashed" onClick={handleDeselect} disabled={!userHasSelected}> Vote: NAH </Button>
        ]}
      >
        <h3 className='Restaurant--count'>
          Votes:
          <Tooltip title={votes && map(votes, (vote, key) => <p key={key}>{vote}</p>)}>
            <span> {(votes && Object.keys(votes).length || 0)}</span>
          </Tooltip>
        </h3>
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          title="Restaurants Info"
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>
          ]}
        >
          <div></div><Text>Name: <Tag color="red">{name}</Tag></Text>
          <div style={{ marginTop: 10 }}><Text>Address: <Text underline strong>{address ? address : 'None'}</Text></Text></div>
          <div style={{ marginTop: 10 }}><Text>Description: <br /><TextArea value={description ? description : 'None'} disabled rows={4}></TextArea></Text></div>
        </Modal>

      </Card>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
