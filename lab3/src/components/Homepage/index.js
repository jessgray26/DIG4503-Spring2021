import React from 'react';

class Homepage extends React.Component {
    render(){
      return(
        <p>{this.props.firstName}</p>
      );
    }
  }

export default Homepage;