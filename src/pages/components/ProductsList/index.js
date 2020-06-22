import React from 'react';

// import { Container } from './styles';
import './style.css';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import img from '../../assets/img.png';

function ProductsList() {
  return (
    <div className="products-list">
      <ul className="list">
        <li>
          <div className="card">
            <img src={img} className="card-image" alt="wooden work" />
            <div className="card-content">
              <div>
                <span className="price">CDN$ 250.00</span>
                <section className="card-buttons">
                  <button type="button">
                    <MdModeEdit />
                  </button>
                  <button type="button">
                    <MdDelete />
                  </button>
                </section>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Duis venenatis tincidunt consequat.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img src={img} className="card-image" alt="wooden work" />
            <div className="card-content">
              <div>
                <span className="price">CDN$ 250.00</span>
                <section className="card-buttons">
                  <button type="button">
                    <MdModeEdit />
                  </button>
                  <button type="button">
                    <MdDelete />
                  </button>
                </section>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Duis venenatis tincidunt consequat.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img src={img} className="card-image" alt="wooden work" />
            <div className="card-content">
              <div>
                <span className="price">CDN$ 250.00</span>
                <section className="card-buttons">
                  <button type="button">
                    <MdModeEdit />
                  </button>
                  <button type="button">
                    <MdDelete />
                  </button>
                </section>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Duis venenatis tincidunt consequat.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img src={img} className="card-image" alt="wooden work" />
            <div className="card-content">
              <div>
                <span className="price">CDN$ 250.00</span>
                <section className="card-buttons">
                  <button type="button">
                    <MdModeEdit />
                  </button>
                  <button type="button">
                    <MdDelete />
                  </button>
                </section>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Duis venenatis tincidunt consequat.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img src={img} className="card-image" alt="wooden work" />
            <div className="card-content">
              <div>
                <span className="price">CDN$ 250.00</span>
                <section className="card-buttons">
                  <button type="button">
                    <MdModeEdit />
                  </button>
                  <button type="button">
                    <MdDelete />
                  </button>
                </section>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Duis venenatis tincidunt consequat.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <img src={img} className="card-image" alt="wooden work" />
            <div className="card-content">
              <div>
                <span className="price">CDN$ 250.00</span>
                <section className="card-buttons">
                  <button type="button">
                    <MdModeEdit />
                  </button>
                  <button type="button">
                    <MdDelete />
                  </button>
                </section>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Duis venenatis tincidunt consequat.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProductsList;
