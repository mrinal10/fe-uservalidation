import React, {useState} from 'react';

import './App.css';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);
  var d = new Date();
  const addUserHandler = (userName, userAge) =>{
    setUsersList((prevUsersList) => {
      return [...prevUsersList, 
        {key: userName+d.getMilliseconds(),
         name: userName, 
         age: userAge}];
    });
  };

  return (
    <>
      <AddUser onAddUser = {addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;