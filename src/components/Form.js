import React from 'react';

function Form() {
  return (
    <div>
    
    <div className="col-md-offset-7 col-md-5">
        <form action method="POST" className="form-inline">
          <div className="form-group">
            <div className="sr-only" htmlFor="task_name">Label</div>
            <input type="text" id="task_name" className="form-control" placeholder="Task Name" />
          </div>
          <div className="form-group">
            <div className="sr-only" htmlFor="inputDs">Label</div>
            <select name="ds" id="inputDs" className="form-control" required>
              <option value={0}>Small</option>
              <option value={1}>Medium</option>
              <option value={2}>High</option>
            </select>
          </div>
          <button className="btn btn-primary" type="button">Submit</button>
          <button className="btn btn-danger" type="button">Cancel</button>
        </form>
      </div>
    </div>
    
    
  );
}

export default Form;