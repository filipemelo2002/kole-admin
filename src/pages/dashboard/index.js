import React, { useEffect, useState } from 'react';
import {
  Link,
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

// import { Container } from './styles';
import {
  MdQueue,
  MdMoveToInbox,
  MdVpnKey,
  MdPowerSettingsNew,
} from 'react-icons/md';
import './style.css';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import ManageProducts from '../manage';
import CustomerOrders from '../customers';
import ManageAccount from '../account';

function Dashboard({ history }) {
  const [selected, setSelected] = useState('dashboard');
  async function signOut(e) {
    e.preventDefault();
    await localStorage.clear();
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
      <Menu pointing secondary>
        <Menu.Item
          name="Dashboard"
          onClick={() => setSelected('dashboard')}
          active={selected === 'dashboard'}
        />
        <Menu.Item
          name="Orders"
          link="/dashboard/orders"
          onClick={() => setSelected('orders')}
          active={selected === 'orders'}
        />
        <Menu.Item
          name="Credentials"
          link="/dashboard/accounts"
          onClick={() => setSelected('credentials')}
          active={selected === 'credentials'}
        />
        <Menu.Menu position="right">
          <Menu.Item name="logout">
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
    </Router>
  );
}

export default Dashboard;
