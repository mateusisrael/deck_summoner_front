import React from 'react';
import { Redirect } from 'react-router-dom';

class Private extends React.Component{
  constructor(props) {
    super(props);
    this.state = { validated: false }
  }

  getToken = () => {
    const credentials = window.localStorage.getItem('deck');
    if(credentials) return true
    return false;

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