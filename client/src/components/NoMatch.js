import React, { Component } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <Segment>
        <Header as='h2' textAlign='center'>
          KUKU is looking everywhere for your page request and we cant find it. Sorry! Start over at
          <Link to='/'> Home</Link>!
        </Header>
        <Image
          centered
          src='https://media0.giphy.com/media/xTiTnJ3BooiDs8dL7W/giphy.gif'
          height='70%'
          width='70%'
        />
      </Segment>
    );
  }
}

export default NoMatch;
