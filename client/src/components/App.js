import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Faq from './Faq';
import Privacy from './Privacy';
import Terms from './Terms';
import Register from './Register';
import Products from './Products';
import ProductView from './ProductView'
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import Mens from './Mens';
import Womens from './Womens';
import Baby from './Baby';
import Accessories from './Accessories';
import MyProducts from './MyProducts';
import HatedItems from './HatedItems';
import Settings from './Settings';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import Footer from './Footer';


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
            <Route exact path='/privacypolicy' component={Privacy} />
            <Route exact path= '/terms' component={Terms}/>
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/products' component={Products}/>
            <Route exact path='/products/:id' component={ProductView}/>
            <Route exact path='/my_hated_products' component={HatedItems} />
            <Route exact path='/ProductView' component={ProductView}/>
            <Route exact path='/my_products' component={MyProducts} />
            <Route exact path= '/settings' component= {Settings}/>
            <Route exact path= '/mens' component = {Mens}/>
            <Route exact path= '/womens' component = {Womens}/>
            <Route exact path= '/accessories' component = {Accessories}/>
            <Route exact path= '/baby' component = {Baby}/>
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Footer />
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
