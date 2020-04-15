import React from 'react';
import './ButtonAddUser.scss';

const ButtonAddUser = props => {
    return (
        <button onClick={props.click}>Dodaj użytkownika</button>
    )
}

export default ButtonAddUser;