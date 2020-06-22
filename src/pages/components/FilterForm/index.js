import React, { useState, useEffect } from 'react';

// import { Container } from './styles';
import { MdDelete } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../../services/api';
import './style.css';
import * as Filters from '../../../store/actions/filter';

function FilterForm({
  filters, fetchFilters, removeFilter, addFilter,
}) {
  const [title, setTitle] = useState('');

  async function addNewTitle(e) {
    e.preventDefault();

    if (title.length === 0) {
      alert('Please, fill in the Section name field');
    }
    const response = await api.addFilter(title);
    console.log(response);
    if (response) addFilter(response);
  }

  useEffect(() => {
    async function getFilters() {
      const data = await api.getFilters();
      fetchFilters(data);
    }
    getFilters();
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
                <MdDelete size={30} onClick={() => removeFilter(item)} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ filters: state.filters });
const mapDispatchToProps = (dispatch) => bindActionCreators(Filters, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterForm);
