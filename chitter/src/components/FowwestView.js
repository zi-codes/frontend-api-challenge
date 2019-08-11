import React from 'react'
import CreateSquiggle from './CreateSquiggle'
import Squiggles from './Squiggles'
import axios from 'axios'

class FowwestView extends React.Component {

  state = {
    squiggles: [],
    user_id: sessionStorage.getItem('user_id'),
    session_key: sessionStorage.getItem('session_key')
  };

  componentDidMount() {
    axios
      .get('https://chitter-backend-api.herokuapp.com/peeps')
      .then((res) => this.setState({ squiggles: res.data }));
  }

  createSquiggle = (squiggle) => {
    axios.post(
      'https://chitter-backend-api.herokuapp.com/peeps',
      {"peep": {"user_id":this.state.user_id, "body":squiggle}},
      {headers:{
        "Authorization": `Token token=${this.state.session_key}`,
        "Content-Type": "application/json"
      }}
    )
    .then(res => {
      console.log(res)
      console.log(res.data)
      this.setState({ squiggles: [res.data, ...this.state.squiggles]})
    })
  }

  toggleLike = (likeStatus) => {
    console.log("fowwest" + likeStatus)
  }

  

  render () {

    return (
    <div>
    <CreateSquiggle createSquiggle={this.createSquiggle} />
    <Squiggles squiggles={this.state.squiggles} toggleLike={this.toggleLike}/>
    </div>
    )

  }
}

export default FowwestView;
