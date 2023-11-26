import React from 'react';

function BotArmy({ selectedItems }) {
  return (
    <div>
      <h1>Bot Army</h1>
      {selectedItems.map((item) => (
        <div key={item.id} className="card">
          <img src={item.avatar_url} className="card-img-top" alt={`${item.name}-avatar`} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              <strong>Bot Class:</strong> {item.bot_class} <br />
              <strong>Catchphrase:</strong> {item.catchphrase} <br />
              <strong>Quantity:</strong> {item.quantity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BotArmy;
