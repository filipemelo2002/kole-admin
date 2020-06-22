import React, { useState } from 'react';

// import { Container } from './styles';
import ProductsList from '../components/ProductsList';
import FilterForm from '../components/FilterForm';
import ProductForm from '../components/ProductForm';
import './style.css';

import ProductContext from './context';

function ManageProducts({ history }) {
  const [filters, setFilters] = useState([]);
  const [products, setProducts] = useState([]);
  return (
    <ProductContext.Provider
      value={{
        setFilters,
        filters,
        history,
        products,
        setProducts,
      }}
    >
      <div className="manage-products">
        <ProductsList />
        <FilterForm />
        <ProductForm />
      </div>
    </ProductContext.Provider>
  );
}

export default ManageProducts;
