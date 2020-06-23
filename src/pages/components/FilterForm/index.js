import React, { useState, useEffect } from 'react';

// import { Container } from './styles';
import { MdDelete } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css';
import { Placeholder } from 'semantic-ui-react';
import * as Filters from '../../../store/actions/filter';

function FilterForm({
  filters, fetchFilters, removeFilter, addFilter,
}) {
  const [title, setTitle] = useState('');

  function addNewTitle(e) {
    e.preventDefault();

    if (title.length === 0) {
      alert('Please, fill in the Section name field');
    }
    addFilter({ title });
  }
  useEffect(() => {
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
          {filters.length > 0 ? filters.map((item) => (
            <li key={`${item.title}-${item.created_at}`}>
              {item.title}
              <span className="filter-actions">
                <MdDelete size={30} onClick={() => removeFilter(item)} />
              </span>
            </li>
          )) : (
            <Placeholder>
              <Placeholder.Line length="full" />
              <Placeholder.Line length="full" />
              <Placeholder.Line length="full" />
              <Placeholder.Line length="full" />
            </Placeholder>
          )}
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
