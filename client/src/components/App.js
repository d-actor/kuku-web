import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Faq from './Faq';
import Register from './Register';
import Products from './Products';
import ProductView from './ProductView'
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import MyProducts from './MyProducts';
import HatedItems from './HatedItems';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/faq' component={Faq} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/products' component={Products}/>
            <Route exact path='/products/:id' component={ProductView}/>
            <Route exact path='/my_hated_products' component={HatedItems} />
            <Route exact path='/ProductView' component={ProductView}/>
            <Route exact path='/my_products' component={MyProducts} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
  },
}

export default App;
