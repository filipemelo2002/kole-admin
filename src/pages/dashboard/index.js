import React, { useEffect, useState } from 'react';
import {
  Link,
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import './style.css';
import { Menu, Icon } from 'semantic-ui-react';
import { Provider } from 'react-redux';
import ManageProducts from '../manage';
import CustomerOrders from '../customers';
import ManageAccount from '../account';
import store from '../../store';

function Dashboard({ history }) {
  const [selected, setSelected] = useState('dashboard');
  async function signOut() {
    localStorage.clear();
    history.push('/');
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    const refresh_token = localStorage.getItem('refresh_token');
    if (!token || !refresh_token) {
      history.push('/');
    }
  }, []);
  return (
    <Router>
      <Provider store={store}>
        <Menu pointing secondary>
          <Menu.Item
            name="Dashboard"
            as={Link}
            to="/dashboard"
            onClick={() => setSelected('dashboard')}
            active={selected === 'dashboard'}
          />
          <Menu.Item
            name="Orders"
            as={Link}
            to="/dashboard/orders"
            onClick={() => setSelected('orders')}
            active={selected === 'orders'}
          />
          <Menu.Item
            name="Credentials"
            as={Link}
            to="/dashboard/accounts"
            onClick={() => setSelected('credentials')}
            active={selected === 'credentials'}
          />
          <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={() => signOut()}>
              <Icon name="power" />
              Logout
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div className="dashboard-container">
          <div className="container">
            <Switch>
              <Route
                exact
                path="/dashboard/"
                component={ManageProducts}
              />
              <Route
                path="/dashboard/orders"
                component={CustomerOrders}
              />
              <Route
                path="/dashboard/accounts"
                component={ManageAccount}
              />
            </Switch>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default Dashboard;
