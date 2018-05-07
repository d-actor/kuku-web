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
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import Mens from './Mens';
import Womens from './Womens';
import Baby from './Baby';
import Accessories from './Accessories';
import MyProducts from './MyProducts';
import HatedItems from './HatedItems';
import PurchasedItems from './PurchasedItems';
import Settings from './Settings';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import ProtectedRoute from './ProtectedRoute';
import Footer from './Footer';

class App extends Component {
  render() {
    return (

        <Segment style={styles.background}>
          <div style = {styles.wrapper}>
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
                <ProtectedRoute exact path='/my_hated_products' component={HatedItems} />
                <ProtectedRoute exact path='/my_products' component={MyProducts} />
                <ProtectedRoute exact path='/purchased_items' component={PurchasedItems} />
                <Route exact path= '/settings' component= {Settings}/>
                <Route exact path= '/mens' component = {Mens}/>
                <Route exact path= '/womens' component = {Womens}/>
                <Route exact path= '/accessories' component = {Accessories}/>
                <Route exact path= '/baby' component = {Baby}/>
                <Route component={NoMatch} />
              </Switch>
            </FetchUser>
          </div>
          <Footer />
        </Segment>

    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
  },
  wrapper: {
    minHeight: '100vh',
    marginBottom: '-150px',
    paddingBottom: '150px',

  }
}

export default App;
