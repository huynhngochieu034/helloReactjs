import React from 'react';
import Search from './Search';
import Sort from './Sort';

function Control() {
  return (
  

    <div className="row">
    
        <Search>
        </Search>
        <Sort></Sort>
        <div className="col-md-5">
                <button type="button" class="btn btn-info btn-block">Add Task</button>
          </div>
        </div>
    
    
   
    
  );
}

export default Control;