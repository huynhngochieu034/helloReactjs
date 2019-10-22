import React from 'react';
import Items from './Items';

function Search() {
  return (
    <div>
    {/*CARD START*/}
    <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th  className="text-center" style={{width: '10%'}}>#</th>
                  <th  className="text-center" style={{width: '50%'}}>Task</th>
                  <th  className="text-center" style={{width: '20%'}}>Level</th>
                  <th  className="text-center" style={{width: '20%'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                <Items></Items>
              </tbody>
            </table>
          </div>
       

    </div>
    
    
  );
}

export default Search;