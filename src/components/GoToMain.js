import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <Link id="main-link" to="/main"> main </Link>
    )
  }
};

export default NoMatch;
