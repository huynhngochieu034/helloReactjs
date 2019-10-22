import React from 'react';

function Sort() {
  return (
        <div>

        {/*Sort  START*/}
        <div className="col-xs-3  col-sm-3 col-md-3">
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort by <span className="caret" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a className="dropdown-item" href="/#" role="button">NAME ACS</a></li>
              <li><a className="dropdown-item" href="/#" role="button">NAME DESC</a></li>
              <li className="divider" role="separator" />
              <li><a className="dropdown-item" href="/#" role="button">LEVEL ACS</a></li>
              <li><a className="dropdown-item" href="/#" role="button">LEVEL DESC</a></li>
            </ul>
            <label className="btn btn-success">NAME - DESC</label>
          </div>
        </div>
        {/*Sort END*/} 

        </div>
        
    
  );
}

export default Sort;