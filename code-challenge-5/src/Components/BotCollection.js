import React from 'react';

function BotCollection({ lists }) {


  const displayData = lists.map((list) => (
    <tr key={list.id}>
      <td>{list.name}</td>
      <td>{list.health}</td>
      <td>{list.damage}</td>
      <td>
        <button style={{color:'green', marginRight:'10px'}} >Add</button> 
        <button style={{color:'red'}}>Remove</button> 
      
      </td>
    </tr>
  ));

  return (
    <div>
      <h4>BotCollection</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Health</th>
            <th>Damage</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{displayData}</tbody>
      </table>
    </div>
  );
}

export default BotCollection;
