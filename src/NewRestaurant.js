import React, { Component, PropTypes } from 'react';
import { database } from './firebase';
import './NewRestaurant.css';
import { Form, Input, Button, Modal } from 'antd';
const { TextArea } = Input;

class NewRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      visible: false,
      address: '',
      description: '',
    };
    this.restaurantsRef = database.ref('/restaurants');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // event.preventDefault();
    const { user } = this.props;
    this.restaurantsRef.push({ name: this.state.name, user: user.displayName, uid: user.uid, address: this.state.address, description: this.state.description })
      .then(this.setState({ name: '' }))
      .catch(err => console.log(err));
    this.setState({ visible: false });
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
    const { name, address, description } = this.state;
    return (
      <Form
        className='NewRestaurant'
      >
        <Button
          onClick={this.showModal}
        >
          Create New Restaurant
        </Button>
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          title="Create new Restaurant for Vote"
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={this.handleSubmit}
              disabled={!name}
            >
              Submit
            </Button>,
          ]}
        >
          <Input
            type='text'
            value={name}
            placeholder='Name of Fine Establishment'
            onChange={(event) => this.setState({ name: event.target.value })}
            style={{ marginBottom: 20 }}
          />
          <Input
            type='text'
            value={address}
            placeholder='Address'
            onChange={(event) => this.setState({ address: event.target.value })}
            style={{ marginBottom: 20 }}
          />
          <TextArea
            type='text'
            value={description}
            placeholder='Description (Menu, etc)'
            onChange={(event) => this.setState({ description: event.target.value })}
            rows={4}
          />
        </Modal>
      </Form>
    );
  }
}

NewRestaurant.propTypes = {
  restaurantsRef: PropTypes.object,
  user: PropTypes.object
};

export default NewRestaurant;
