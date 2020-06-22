import React from 'react';

// import { Container } from './styles';
import './style.css';

function ManageAccount() {
  return (
    <div className="accounts-dashboard">
      <div className="update-form">
        <form id="sign-in">
          <input type="email" placeholder="New E-Mail" />
          <input type="password" placeholder="New Password" />
          <button type="submit" className="submit-form">
            Update credentials
          </button>
        </form>
      </div>
    </div>
  );
}

export default ManageAccount;
