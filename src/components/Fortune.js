import React, {Component} from 'react';
import axios from 'axios';


const FORTUNE_API = "http://askat.me:8000/api/fortune/";

class Fortune extends Component {

  state = {
    fortune: '',
  }

  handleFortune = (birthday) => {
    let fortune;

    axios.get(`${FORTUNE_API}${birthday}`)
      .then(response => {
        fortune = response.data;

        this.setState({
          fortune: fortune,
        })
      })
  }

  render() {
    const { name, birthday } = this.props.match.params;
    const { fortune } = this.state;

    return (
      <div className="Fortune">
        {name} was born in {birthday}

        <p>나의 운세</p>
        <button type="button>" onClick={() => {this.handleFortune(birthday)}}>운세 확인하기</button>
        <p>{fortune}</p>
      </div>
    )
  }
};

export default Fortune;
