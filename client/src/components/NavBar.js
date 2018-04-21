import React, { Component } from 'react';
import { Menu, Dropdown, Image, Divider } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../images/home/KUKU2 (2).jpg'
import { handleLogout } from '../actions/auth';

class NavBar extends Component {

  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right' >
          <Menu.Item>
            <Link to='/my_products' style={{ color: '#ffffff' }}>Loved</Link>
          </Menu.Item>
          <Divider hidden />
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

  getRandomInt = () => {
      return Math.floor(Math.random() * Math.floor(50));
  }


  render() {
    let int  = this.getRandomInt()
    return (
      <div>
        <Image src={Logo} style={styles.image} alt="Kuku Logo"/>
        <Menu pointing secondary>
          <Dropdown style={styles.text} size='big' pointing>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to='/'>
                  <Menu.Item icon='home' name='home' />
                </Link>
              </Dropdown.Item>
              <Dropdown text='Shopping' icon='cart'>
                <Dropdown.Menu>
                  <Link to={'/products'}>
                    <Dropdown.Item>All Products</Dropdown.Item>
                  </Link>
                  <Link to={'/mens'}>
                    <Dropdown.Item>Mens</Dropdown.Item>
                  </Link>
                  <Link to={'/womens'}>
                    <Dropdown.Item>Womens</Dropdown.Item>
                  </Link>
                  <Link to={'/baby'}>
                    <Dropdown.Item>Baby</Dropdown.Item>
                  </Link>
                  <Link to={'/accessories'}>
                    <Dropdown.Item>Accessories</Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Item>
                <Link to={`/products/${int}`}>
                  <Menu.Item icon='trophy' name='Go KUKU!' />
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={'/settings'}>
                  <Menu.Item icon='setting' name='Settings' />
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const styles = {
  text: {
    color: "#FFF",
  },
  navbarWrap: {
    position: 'fixed',
    width: '100%',
    zIndex: '10',
  },
  background: {
    backgroundColor: "black",
  },
  image: {
    verticalAlign: 'middle',
    height: '5%',
    width: '10%',
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
