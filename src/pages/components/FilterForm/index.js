import React, { useState, useEffect, useContext } from 'react';

// import { Container } from './styles';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import './style.css';

import api from '../../../services/api';
import filtersContext from '../../manage/context';

function FilterForm() {
  const { history, filters, setFilters } = useContext(filtersContext);
  const [title, setTitle] = useState('');

  async function addNewTitle(e) {
    e.preventDefault();

    if (title.length === 0) {
      alert('Please, fill in the Section name field');
      return;
    }
    const response = await api.addFilter(title);
    if (!response) history.push('/');
    setFilters([...filters, response]);
  }

  useEffect(() => {
    async function fetchFilters() {
      try {
        const response = await api.getFilters();
        setFilters(response);
      } catch (err) {
        console.log(err);
        // throw Error('error when fetching for Filters');
      }
    }
    fetchFilters();
  }, []);

  return (
    <div className="filters">
      <h1>Filters</h1>
      <form onSubmit={addNewTitle}>
        <input
          type="text"
          placeholder="Section name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="button" className="submit-secondary">
          Edit Section
        </button>
        <button className="submit-form" type="submit">
          Add Section
        </button>
      </form>
      <div className="filters-list">
        <ul>
          {filters.map((item) => (
            <li key={`${item.title}-${item.created_at}`}>
              {item.title}
              <span className="filter-actions">
                <MdModeEdit />
                <MdDelete />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterForm;
