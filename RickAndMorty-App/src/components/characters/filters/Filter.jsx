import "./Filter.css";

export const Filter = ({filters, handleFilters}) => {
  
  return (
    <div className="filters-container form-check form-switch d-lg-flex justify-content-lg-center gap-2 py-2 mx-5 rounded-5">
      <input
        onChange={handleFilters}
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={filters.id}
      />
      <label className="filters-text form-check-label " htmlFor={filters.id}>
      {filters.filterValue}
      </label>
    </div>
  );
};
