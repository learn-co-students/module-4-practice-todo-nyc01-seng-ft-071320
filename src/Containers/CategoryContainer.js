import React from 'react';

function CategoryContainer(props) {
  function renderCategory() {
    const { categories, buttonSelector, selectedButton } = props;
    return categories.map((cat) => (
      <button
        key={cat}
        onClick={buttonSelector}
        className={selectedButton === cat ? 'selected' : null}>
        {cat}
      </button>
    ));
  }

  return (
    <div className='categories'>
      <h5>Category Filters</h5>
      {renderCategory()}
    </div>
  );
}

export default CategoryContainer;
