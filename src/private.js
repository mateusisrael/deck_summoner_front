import React from 'react';
import { Redirect } from 'react-router-dom';

class Private extends React.Component{
  constructor(props) {
    super(props);
    this.state = { validated: false }
  }

  getToken = () => {
    const deckData = JSON.parse(window.localStorage.getItem('deck'));
    const token = deckData['jwttoken'];
    if(token) return true;
    return false
  }

  render() {
    return(
      <>
        {
          this.getToken() 
            ? this.props.children(this.props)
            : <Redirect to="/login" />
        }
      </>
    );
  }
}

export default Private;