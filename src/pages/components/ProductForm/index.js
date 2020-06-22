import React, { useContext, useState } from 'react';

// import { Container } from './styles';
import filtersContext from '../../manage/context';
import api from '../../../services/api';

function ProductForm() {
  const { filters, setProducts } = useContext(filtersContext);
  const [pictures, setPicutres] = useState(null);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [filter_id, setFilterId] = useState(null);

  async function addProduct(e) {
    e.preventDefault();
    if (!(pictures || description || price || filter_id)) {
      alert('Please, fill in all fields');
    }

    const response = await api.addProduct(
      description,
      price,
      pictures,
      filter_id,
    );

    console.log(response);
  }
  return (
    <div className="products">
      <h1>Product</h1>
      <form onSubmit={addProduct}>
        <input
          type="file"
          placeholder="Pictures"
          multiple
          onChange={(e) => setPicutres(e.target.files)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <select
            placeholder="Section"
            onSelect={(e) => setFilterId(e.target.value)}
          >
            <option>Filter</option>
            {filters.map((filter) => (
              <option
                value={filter.id}
                key={`${filter.title}-${filter.created_at}`}
              >
                {filter.title}
              </option>
            ))}
          </select>
        </div>
        <button type="button" className="submit-secondary">
          Edit Product
        </button>
        <button type="submit" className="submit-form">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
