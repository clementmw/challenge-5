import React from 'react';

function BotCollection({ lists }) {

  const displayData = lists.map((list) => (
    <div key={list.id} className="col">
      <div className="card">
        <img src={list.avatar_url} className="card-img-top" alt={`${list.name}-avatar`} />
        <div className="card-body">
          <h5 className="card-title">{list.name}</h5>
          <p className="card-text">
            <strong>Bot Class:</strong> {list.bot_class} <br />
            <strong>Health:</strong> {list.health} <br />
            <strong>Damage:</strong> {list.damage} <br />
            <strong>Armor:</strong> {list.armor} <br />
            <strong>Catchphrase:</strong> {list.catchphrase}
          </p>
          <div className="btn-group">
            <button className="btn btn-success" style={{ marginRight: '10px' }}>Add</button>
            <button className="btn btn-danger">Remove</button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {displayData}
    </div>
  );
}

export default BotCollection;
