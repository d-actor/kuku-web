import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item>
            <Link to='/my_products' style={{ color: '#ffffff' }}>My Loved Products</Link>
          </Menu.Item>
          <Menu.Item
            name='Logout'
            style={styles.text}
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item style={styles.text} name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item style={styles.text} name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item style={styles.text} name='home' />
          </Link>
          <Link to='/products'>
            <Menu.Item style={styles.text} name='List Items' />
          </Link>
          <Link to='/products/1'>
            <Menu.Item style={styles.text} name='Go KUKU' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const styles = {
  text: {
    color: "#FFF",
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
