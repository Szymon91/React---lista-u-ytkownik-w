import React, {Component} from 'react';
import ButtonAddUser from './ButtonAddUser';
import UsersList from './UsersList';

import './App.scss';

const url = 'https://randomuser.me/api/?results=1';

class App extends Component {
  state = {
    users: []
  }

  handleDataFetch = () => {
    fetch(url)
      .then(response => {
        if(response.ok) {
          return response
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(data => {
        const user = data.results
        this.setState(state => ({
          users: state.users.concat(user)
        }))
      })
      .catch(error => console.log(error))
  }

  render() {
    const {users} = this.state
    return (
      <div>
        <ButtonAddUser click={this.handleDataFetch} />
        {users.length ? <UsersList users={users} /> : null}
      </div>
    );
  }
}

export default App;
