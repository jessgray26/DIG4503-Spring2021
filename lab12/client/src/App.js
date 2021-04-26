import React from'react';

import PutUserRequest from './components/PutUserRequest';
import GetUserRequest from './components/GetUserRequest';
import DeleteUserRequest from './components/DeleteUserRequest';

import './App.css';

export default class App extends React.Component {
  render(){
    return(
      <div>
          <p><PutUserRequest/></p>    
          <p><GetUserRequest/></p> 
          <p><DeleteUserRequest/></p>           
      </div>
      
    );
  }
};

