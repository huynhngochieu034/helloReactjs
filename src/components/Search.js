import React from 'react';

function Search() {
  return (
    <div>
    {/*Search START*/}
    <div className="col-xs-4  col-sm-4 col-md-4">
    <div className="input-group">
      <input type="text" className="form-control"  placeholder="Search for..." />
     
      <span className="input-group-btn">
        <button className="btn btn-info" type="button">Search </button>
      </span>
    </div>
  </div>
  {/*Search END*/}

    </div>
    
    
  );
}

export default Search;