import React from 'react';

// import { Container } from './styles';

import './style.css';

function CustomerOrders() {
  return (
    <div className="customers-orders">
      <table className="order-list">
        <tr>
          <th>Order ID</th>
          <th>Customer&apos;s Email</th>
          <th>Status</th>
          <th>Subtotal</th>
        </tr>
        <tr>
          <td>1223</td>
          <td>filipemelo032@gmail.com</td>
          <td>
            <select placeholder="Section">
              <option value="">Section</option>
            </select>
          </td>
          <td>CDN$ 250</td>
        </tr>
        <tr>
          <td>1223</td>
          <td>filipemelo032@gmail.com</td>
          <td>
            <select placeholder="Section">
              <option value="">Section</option>
            </select>
          </td>
          <td>CDN$ 250</td>
        </tr>
        <tr>
          <td>1223</td>
          <td>filipemelo032@gmail.com</td>
          <td>
            <select placeholder="Section">
              <option value="">Section</option>
            </select>
          </td>
          <td>CDN$ 250</td>
        </tr>
      </table>
    </div>
  );
}

export default CustomerOrders;
