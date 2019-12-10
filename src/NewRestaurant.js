import React, { Component, PropTypes } from 'react';
import { database } from './firebase';
import './NewRestaurant.css';
import { Form, Input, Button } from 'antd';

class NewRestaurant extends Component {
  constructor () {
    super();
    this.state = {
      name: ''
    };
    this.restaurantsRef = database.ref('/restaurants');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    this.restaurantsRef.push({ name: this.state.name })
    .then(this.setState({ name: '' }))
    .catch(err => console.log(err));
  }

  render () {
    const { name } = this.state;

    return (
      <Form
        className='NewRestaurant'
      >
        <Input
          type='text'
          value={name}
          placeholder='Name of Fine Establishment'
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <Button
          onClick={this.handleSubmit}
          disabled={!name}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

NewRestaurant.propTypes = {
  restaurantsRef: PropTypes.object
};

export default NewRestaurant;
