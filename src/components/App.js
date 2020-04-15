import React, {Component} from 'react';
import ButtonAddUser from './ButtonAddUser';
import UsersList from './UsersList';

import './App.scss';

class App extends Component {
  state = {

  }
  render() {
    return (
      <div>
        <ButtonAddUser />
        <UsersList />
      </div>
    );
  }
}

export default App;
