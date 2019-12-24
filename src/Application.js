import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';
import { Typography, PageHeader } from 'antd';
const { Title } = Typography;

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      restaurants: null
    };
    this.restaurantRef = database.ref('/restaurants');
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser });

      this.restaurantRef.on('value', (snapshot) => {
        this.setState({ restaurants: snapshot.val() });
      });
    });
  }

  render() {
    const { currentUser, restaurants } = this.state;
    return (
      <div className='Application'>
        <PageHeader 
          title={
            <Title>Lunch Rush</Title>
          }
        />
        <div>
          {!currentUser && <SignIn />}
          {
            currentUser &&
            <div>
              <NewRestaurant user={currentUser} />
              <Restaurants restaurants={restaurants} user={currentUser} />
              <CurrentUser user={currentUser} />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Application;
